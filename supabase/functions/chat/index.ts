import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const VANSH_CONTEXT = `You are Vansh's AI assistant on his portfolio website. You help visitors learn about Vansh Sharma, a BTech student in Information Technology at Bhagwan Parshuram Institute of Technology (2024-2028).

Key information about Vansh:
- Contact: vansh1910sharma@gmail.com | +91 9711211838
- LinkedIn: linkedin.com/in/Vansh | GitHub: github.com/Vansh
- Location: Rohini, Delhi, India

Technical Skills:
- Languages: Python, C/C++, SQL (Postgres), MySQL, MongoDB, JavaScript, TypeScript, HTML/CSS
- Frameworks: React, Node.js, Express, JUnit, Tailwind, Bootstrap, EJS
- Developer Tools: Git, Github, Google Colab, PowerBI, Excel, VS Code, PyCharm, Figma, REST API, Jupyter Notebook
- Libraries: pandas, NumPy, Matplotlib, Seaborn

Experience:
- Open Source Contributor at KubeStellar (June 2025 – Aug 2025)
  - Developed and optimized web application features using React
  - Enhanced user experience and interface responses
  - Maintained documentation and contributed to UI/UX design

Projects:
1. EduMorph - Multimodal AI-powered learning platform using React, MongoDB, Node.js, Tailwind
2. MedGuide - Smart medicine guide for quick info and symptoms using React, MongoDB, Node.js
3. LifeLine OS - Emergency alert system with real-time location-based alerts and AI assistant for natural calamities
4. GTA 6 Animated Website - Interactive animated website with Tailwind CSS and JavaScript
5. Donation Platform - Platform to donate books, clothes, stationery with payment gateway integration

Be friendly, professional, and helpful. If asked something you don't know about Vansh, say you're not sure but offer to help with what you do know. Keep responses concise but informative.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: VANSH_CONTEXT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again in a moment." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "AI service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
