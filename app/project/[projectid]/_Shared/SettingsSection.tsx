"use client";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { THEME_NAME_LIST, THEMES } from "@/data/Themes";
import { Camera, Share, Share2, Sparkle } from "lucide-react";
import React, { useState } from "react";

const SettingsSection = () => {
  const [selectedTheme, setSelectedTheme] = useState("");
  const [projectName, setProjectName] = useState("");
  const [userNewProjectInput, setUserNewProjectInput] = useState("");

  return (
    <div className="w-[300px] h-[90vh] p-2 border-r">
      <h1 className="font-medium">Settings</h1>

      <div className="mt-3">
        <h2 className="text-sm mt-1">Project Name</h2>
        <input
          className="p-2 text-sm border mt-1"
          type="text"
          placeholder="Project Name"
          onChange={(e)=>setProjectName(e.target.value)}
        />
      </div>

      <div className="mt-3">
        <h1 className="text-sm mb-1">Generate New Screen</h1>
        <Textarea onChange={(e)=> setUserNewProjectInput(e.target.value)} placeholder="Enter Promt to Generate Screen Using AI" />
        <Button className="mt-2">
          <Sparkle /> Generate with AI
        </Button>
      </div>

      <div className="mt-3">
        <h1 className="text-sm mb-1">Themes</h1>

        <div className="h-[200px] overflow-auto">
          <div>
            {THEME_NAME_LIST.map((theme, index) => (
              <div
                onClick={() => setSelectedTheme(theme)}
                key={index}
                className={`p-3 cursor-pointer border rounded-xl mb-2 ${theme === selectedTheme && "border-primary bg-primary/20"}`}
              >
                <h2>{theme}</h2>
                <div className="flex gap-2">
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: THEMES[theme]?.primary }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: THEMES[theme]?.secondary }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: THEMES[theme]?.accent }}
                  ></div>
                  <div
                    className="w-4 h-4 rounded-full"
                    style={{ background: THEMES[theme]?.background }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4">
          <h1 className="text-sm mb-1">Extras</h1>
          <Button className="mt-2 mr-2 cursor-pointer" variant={'outline'}>
            <Camera /> Screenshot
          </Button>

          <Button className="mt-2 cursor-pointer" variant={'outline'}>
            <Share2 /> Share
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SettingsSection;
