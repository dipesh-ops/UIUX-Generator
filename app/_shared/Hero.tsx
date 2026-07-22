'use client'
import React, { useState } from 'react'
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupTextarea,
} from "@/components/ui/input-group"
import { Loader, Send } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import { ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { AnimatedGradientText } from '@/components/ui/animated-gradient-text'
import { suggestions } from '@/data/constant'
import { useUser } from '@clerk/nextjs'
import { useRouter } from 'next/navigation'
import axios from 'axios'
import { randomUUID } from 'crypto'


const Hero = () => {
  const [userInput, setUserInput] = useState<string>();
  const [device, setDevice] = useState<string>();
  const [loading, setLoading] = useState(false);
  const {user} = useUser();
  const router = useRouter();

  const createProject = async () =>{
    if(!user){
      router.push('/sign-in')
    }

    if(!userInput){
      return;
    }

    setLoading(true);

    const projectId = crypto.randomUUID();
    const result = await axios.post('/api/project', {
      projectId : projectId,
      userInput : userInput,
      device : device
    });

    console.log(result?.data);
    setLoading(false);
  }
  return (
    <div className='p-10 md:px-24 lg:px-48 xl:px-60 mt-20'>

      <div className='flex justify-center items-center w-full'>
        <div className="group relative mx-auto flex items-center justify-center rounded-full px-4 py-1.5 shadow-[inset_0_-8px_10px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-5px_10px_#8fdfff3f]">
      <span
        className={cn(
          "animate-gradient absolute inset-0 block h-full w-full rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      🎉 <hr className="mx-2 h-4 w-px shrink-0 bg-neutral-500" />
      <AnimatedGradientText className="text-sm font-medium">
        Introducing Magic UI
      </AnimatedGradientText>
      <ChevronRight className="ml-1 size-4 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
    </div>
      </div>
        <h2 className='text-5xl font-bold text-center p-5 md:px-24 lg:px-48 xl:px-18'>Design High Quality <span className='text-primary'>Website and Mobile</span> Designs</h2>
        <p className='text-center text-gray-600'>From websites to mobile apps, we turn ideas into intutive, high impact digital experiences</p>

        <div className="flex justify-center items-center w-full gap-6 mt-5">
      <InputGroup className='max-w-xl bg-white z-10'>
        <InputGroupTextarea
          data-slot="input-group-control"
          className="flex field-sizing-content min-h-20 w-full resize-none rounded-md bg-transparent px-3 py-2.5 text-base transition-[color,box-shadow] outline-none md:text-sm"
          placeholder="What design you want to create..."
          value={userInput}
          onChange={(e)=> setUserInput(e.target.value)}
        />
        <InputGroupAddon align="block-end">
            <Select onValueChange={(value)=> setDevice(value)}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="website" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                    <SelectItem value='website'>Website</SelectItem>
                    <SelectItem value='mobile'>Mobile</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          <InputGroupButton className="ml-auto" size="sm" variant="default" onClick={()=> createProject()}>
            {loading ? <Loader className='animate-spin'/> : <Send/>}
          </InputGroupButton>
        </InputGroupAddon>
      </InputGroup>
    </div>

    <div className='flex flex-row mt-5 justify-center text-center'>
      {
        suggestions.map((s, i)=>(
          <div className='shadow-lg border-1 bg-white z-20 p-2 m-1 rounded-md cursor-pointer' onClick={(e)=> setUserInput(s.description)} key={i}>
            <h2 className='text-lg'>{s.icon}</h2>
            <h2 className='text-xs'>{s.name}</h2>
          </div>
        ))
      }
    </div>
    
    </div>
  )
}

export default Hero