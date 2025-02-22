import React from 'react';

interface HeaderProps {
  title: string;
  subtitle: string;
}

export default function Header({ title, subtitle }: HeaderProps) {
    return (
<div className="flex items-center justify-center">

      <div className="p-8">
        <div className="max-w-xl mx-auto text-center space-y-2">
          <h1 className=" text-3xl tracking-wide Raleway">{title}</h1>
          <div className="w-96 h-px bg-white" />
          <p className="/90 text-mg tracking-wider">{subtitle}</p>
        </div>
      </div>
      </div>

    )
}
