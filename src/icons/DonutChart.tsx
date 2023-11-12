function DonutChartIcon(props: React.SVGProps<SVGSVGElement>) {
   return (
      <svg width={24} height={24} fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
         <path clipRule="evenodd" d="M21 12v0a9 9 0 01-9 9v0a9 9 0 01-9-9v0a9 9 0 019-9v0a9 9 0 019 9z" stroke="#6B6B6B" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
         <path d="M18.364 18.364l-6.071-6.071a1 1 0 01-.293-.707V3M12.07 11.96l7.72-4.46" stroke="#6B6B6B" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round" />
      </svg>
   );
}

export default DonutChartIcon;
