function SupportIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <circle cx={12} cy={12} r={9} stroke="#6B6B6B" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
         <circle cx={12} cy={12} r={3.5} stroke="#6B6B6B" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
         <path d="M14.475 9.525l3.888-3.888M5.637 18.363l3.888-3.888M9.525 9.525L5.637 5.637M18.363 18.363l-3.888-3.888" stroke="#6B6B6B" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
   );
}

export default SupportIcon;
