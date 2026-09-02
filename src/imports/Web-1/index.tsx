import svgPaths from "./svg-uom61kpuhv";
import imgImage150 from "./18114d8a928ed9836f194b82b9aa3da76f2f297d.png";

function Heading() {
  return (
    <div className="h-[47.705px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Inter:Regular',sans-serif] font-normal leading-[47.705px] left-[0.11px] not-italic text-[42.935px] text-[transparent] top-[0.02px] tracking-[0.4402px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(16, 24, 40) 0%, rgb(245, 73, 0) 100%)" }}>
        Walls
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-[0.11px] size-[19.082px] top-[4.79px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.082" preserveAspectRatio="none" viewBox="0 0 19.082 19.082" width="19.082">
        <g id="Icon">
          <path d="M6.35938 1.58984V4.77018" id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
          <path d="M12.7217 1.58984V4.77018" id="Vector_2" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
          <path d={svgPaths.p24f3f200} id="Vector_3" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
          <path d="M2.38477 7.95898H16.6963" id="Vector_4" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
        </g>
      </svg>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[28.623px] relative shrink-0 w-full" data-name="Paragraph">
      <Icon />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-[28.74px] not-italic text-[#4a5565] text-[19.082px] top-[0.02px] tracking-[-0.3727px] whitespace-nowrap">{`Here's what's happening in your Wall `}</p>
    </div>
  );
}

function App() {
  return (
    <div className="content-stretch flex flex-col gap-[9.541px] h-[85.869px] items-start relative shrink-0 w-full" data-name="App">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute content-stretch flex flex-col h-[86px] items-start left-[333.94px] right-[28.06px] top-[122.84px]" data-name="Container">
      <App />
    </div>
  );
}

function TextInput() {
  return (
    <div className="absolute bg-[#f9fafb] h-[54.861px] left-0 rounded-[16.697px] top-0 w-[534.297px]" data-name="Text Input">
      <div className="content-stretch flex items-center overflow-clip pl-[47.705px] pr-[19.082px] py-[11.926px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[normal] not-italic relative shrink-0 text-[19.082px] text-[rgba(10,10,10,0.5)] tracking-[-0.3727px] whitespace-nowrap">Search anything...</p>
      </div>
      <div aria-hidden className="absolute border-[#e5e7eb] border-[1.193px] border-solid inset-0 pointer-events-none rounded-[16.697px]" />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[14.31px] size-[23.853px] top-[15.51px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p1d782b80} id="Vector" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p121be780} id="Vector_2" stroke="#99A1AF" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute h-[54.861px] left-[4.22px] top-[2.11px] w-[534.297px]" data-name="Container">
      <TextInput />
      <Icon1 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[11.93px] size-[23.853px] top-[11.92px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p22196b00} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p3d9d72a0} id="Vector_2" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function Text() {
  return <div className="absolute bg-[#ff6900] left-[31.01px] opacity-100 rounded-[40017884px] size-[9.541px] top-[7.15px]" data-name="Text" />;
}

function Button() {
  return (
    <div className="absolute left-0 rounded-[16.697px] size-[47.705px] top-0" data-name="Button">
      <Icon2 />
      <Text />
    </div>
  );
}

function Text1() {
  return (
    <div className="flex-[1_0_0] h-[23.853px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[#364153] text-[16.697px] top-0 tracking-[-0.1794px] whitespace-nowrap">Spanish</p>
      </div>
    </div>
  );
}

function Icon3() {
  return (
    <div className="relative shrink-0 size-[19.082px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.082" preserveAspectRatio="none" viewBox="0 0 19.082 19.082" width="19.082">
        <g id="Icon">
          <path d={svgPaths.p2ff2d740} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
        </g>
      </svg>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex gap-[9.541px] h-[45.32px] items-center left-[62.02px] px-[20.275px] py-[1.193px] rounded-[16.697px] top-[1.19px] w-[130.406px]" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e7eb] border-[1.193px] border-solid inset-0 pointer-events-none rounded-[16.697px]" />
      <Text1 />
      <Icon3 />
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute h-[47.705px] left-[1751.01px] top-[5.69px] w-[192.423px]" data-name="Container">
      <Button />
      <Button1 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[54.861px] relative shrink-0 w-full" data-name="Container">
      <Container2 />
      <Container3 />
    </div>
  );
}

function App1() {
  return (
    <div className="absolute bottom-0 h-[1499px] left-[301.58px] pointer-events-none top-0">
      <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[97.012px] items-start pb-[1.193px] pointer-events-auto pt-[19.082px] px-[28.623px] sticky top-0 w-[2001.405px]" data-name="App">
        <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.193px] border-solid inset-0 pointer-events-none shadow-[0px_1.193px_3.578px_0px_rgba(0,0,0,0.1),0px_1.193px_2.385px_0px_rgba(0,0,0,0.1)]" />
        <Container1 />
      </div>
    </div>
  );
}

function App3() {
  return (
    <div className="drop-shadow-[0px_11.926px_8.945px_rgba(0,0,0,0.1),0px_4.771px_3.578px_rgba(0,0,0,0.1)] relative rounded-[16.697px] shrink-0 size-[47.705px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(245, 73, 0) 50%, rgb(202, 53, 0) 100%)" }} data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center relative size-full">
        <div className="h-[27px] relative shrink-0 w-[38px]" data-name="image 150">
          <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage150} />
        </div>
      </div>
    </div>
  );
}

function Container8() {
  return (
    <div className="h-[28.623px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-0 not-italic text-[#101828] text-[19.082px] top-0 tracking-[-0.3727px] whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex h-[19.082px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] not-italic relative shrink-0 text-[#f54900] text-[14.312px] whitespace-nowrap">Premium User</p>
    </div>
  );
}

function App4() {
  return (
    <div className="flex-[1_0_0] h-[47.705px] min-w-px relative" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container8 />
        <Container9 />
      </div>
    </div>
  );
}

function Container7() {
  return (
    <div className="h-[47.705px] relative shrink-0 w-[157.017px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14.312px] items-center relative size-full">
        <App3 />
        <App4 />
      </div>
    </div>
  );
}

function Icon4() {
  return (
    <div className="h-[23.853px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[50.02%_16.67%_49.98%_16.66%]" data-name="Vector">
        <div className="absolute inset-[-0.99px_-6.25%]">
          <svg className="block size-full" fill="none" height="1.98771" preserveAspectRatio="none" viewBox="0 0 17.8894 1.98771" width="17.8894">
            <path d="M0.993856 0.993856H16.8955" id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[75.02%_16.67%_24.98%_16.66%]" data-name="Vector">
        <div className="absolute inset-[-0.99px_-6.25%]">
          <svg className="block size-full" fill="none" height="1.98771" preserveAspectRatio="none" viewBox="0 0 17.8894 1.98771" width="17.8894">
            <path d="M0.993856 0.993856H16.8955" id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[25.01%_16.67%_74.99%_16.66%]" data-name="Vector">
        <div className="absolute inset-[-0.99px_-6.25%]">
          <svg className="block size-full" fill="none" height="1.98771" preserveAspectRatio="none" viewBox="0 0 17.8894 1.98771" width="17.8894">
            <path d="M0.993856 0.993856H16.8955" id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button2() {
  return (
    <div className="relative rounded-[11.926px] shrink-0 size-[42.935px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[9.541px] px-[9.541px] relative size-full">
        <Icon4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="content-stretch flex h-[47.705px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container7 />
      <Button2 />
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[96.603px] items-start left-0 pb-[1.193px] pt-[23.853px] px-[23.853px] top-0 w-[304.12px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.193px] border-solid inset-0 pointer-events-none" />
      <Container6 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="relative shrink-0 size-[23.853px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p22b0b000} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d="M20.8706 11.9277H8.94434" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p2657a9c0} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[28.623px] relative shrink-0 w-[60.377px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-0 not-italic text-[19.082px] text-white top-0 tracking-[-0.3727px] whitespace-nowrap">Logout</p>
      </div>
    </div>
  );
}

function Button3() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#ff6900] gap-[9.541px] h-[57.246px] items-center justify-center relative rounded-[16.697px] shrink-0 to-[#f54900] w-full" data-name="Button">
      <Icon5 />
      <Text2 />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute content-stretch flex flex-col h-[96.603px] items-start left-0 pt-[20.275px] px-[19.082px] top-[1402.53px] w-[304.12px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-solid border-t-[1.193px] inset-0 pointer-events-none" />
      <Button3 />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute content-stretch flex h-[19.082px] items-start left-0 px-[14.312px] top-0 w-[275.497px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] min-w-px not-italic relative text-[#99a1af] text-[14.312px] tracking-[0.7156px] uppercase">Main</p>
    </div>
  );
}

function Icon6() {
  return (
    <div className="relative shrink-0 size-[23.853px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p14820060} id="Vector" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d="M17.8916 16.8864V8.93555" id="Vector_2" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d="M12.9219 16.8911V4.96484" id="Vector_3" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d="M7.9521 16.8939V13.9123" id="Vector_4" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function DesktopNavItem() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-[32.294px]" data-name="DesktopNavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[#364153] text-[16.697px] top-0 tracking-[-0.1794px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function Button4() {
  return (
    <div className="content-stretch flex gap-[14.312px] h-[47.705px] items-center pl-[19.082px] relative rounded-[16.697px] shrink-0 w-full" data-name="Button">
      <Icon6 />
      <DesktopNavItem />
    </div>
  );
}

function Icon7() {
  return (
    <div className="relative shrink-0 size-[23.853px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p39710a90} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p1667e940} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p1f1ddd00} id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p3bd67580} id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function DesktopNavItem1() {
  return (
    <div className="flex-[1_0_0] h-[23.853px] min-w-px relative" data-name="DesktopNavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[16.697px] text-white top-0 tracking-[-0.1794px] whitespace-nowrap">Wall</p>
      </div>
    </div>
  );
}

function DesktopNavItem2() {
  return <div className="bg-white relative rounded-[40017884px] shrink-0 size-[9.541px]" data-name="DesktopNavItem" />;
}

function Button5() {
  return (
    <div className="bg-gradient-to-r content-stretch drop-shadow-[0px_11.926px_8.945px_#ffd6a7,0px_4.771px_3.578px_#ffd6a7] flex from-[#ff6900] gap-[14.312px] h-[47.705px] items-center px-[19.082px] relative rounded-[16.697px] shrink-0 to-[#f54900] w-full" data-name="Button">
      <Icon7 />
      <DesktopNavItem1 />
      <DesktopNavItem2 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[2px] items-start left-0 top-[31.1px] w-[275.497px]">
      <Button4 />
      <Button5 />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute content-stretch flex h-[19.082px] items-start left-0 px-[14.312px] top-[196.13px] w-[275.497px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] min-w-px not-italic relative text-[#99a1af] text-[14.312px] tracking-[0.7156px] uppercase">Programs</p>
    </div>
  );
}

function Icon8() {
  return (
    <div className="relative shrink-0 size-[23.853px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p19ff6800} id="Vector" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p2c739f00} id="Vector_2" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function DesktopNavItem3() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-[74.166px]" data-name="DesktopNavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[#364153] text-[16.697px] top-0 tracking-[-0.1794px] whitespace-nowrap">Programs</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex gap-[14.312px] h-[47.705px] items-center left-0 pl-[19.082px] rounded-[16.697px] top-[227.75px] w-[275.497px]" data-name="Button">
      <Icon8 />
      <DesktopNavItem3 />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute content-stretch flex h-[19.082px] items-start left-0 px-[14.312px] top-[291.3px] w-[275.497px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] min-w-px not-italic relative text-[#99a1af] text-[14.312px] tracking-[0.7156px] uppercase">Settings</p>
    </div>
  );
}

function Icon9() {
  return (
    <div className="relative shrink-0 size-[23.853px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p9de2880} id="Vector" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p13574040} id="Vector_2" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function DesktopNavItem4() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-[63.656px]" data-name="DesktopNavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[#364153] text-[16.697px] top-0 tracking-[-0.1794px] whitespace-nowrap">Settings</p>
      </div>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex gap-[14.312px] h-[47.705px] items-center left-0 pl-[19.082px] rounded-[16.697px] top-[323.41px] w-[275.497px]" data-name="Button">
      <Icon9 />
      <DesktopNavItem4 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="relative shrink-0 size-[23.853px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p2697c3a0} id="Vector" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d="M3.08545 5.99609H20.7701" id="Vector_2" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.pdbc3980} id="Vector_3" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function DesktopNavItem5() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-[59.464px]" data-name="DesktopNavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[#364153] text-[16.697px] top-0 tracking-[-0.1794px] whitespace-nowrap">Catalog</p>
      </div>
    </div>
  );
}

function Button8() {
  return (
    <div className="absolute content-stretch flex gap-[14.312px] h-[47.705px] items-center left-0 pl-[19.082px] rounded-[16.697px] top-[133.89px] w-[275.497px]" data-name="Button">
      <Icon10 />
      <DesktopNavItem5 />
    </div>
  );
}

function App5() {
  return (
    <div className="h-[486.592px] relative shrink-0 w-full" data-name="App">
      <Container11 />
      <Frame />
      <Container12 />
      <Button6 />
      <Container13 />
      <Button7 />
      <Button8 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1277.303px] items-start left-[14.31px] overflow-clip top-[110.92px] w-[275.497px]" data-name="Primitive.div">
      <App5 />
    </div>
  );
}

function Container4() {
  return (
    <div className="h-[1499.132px] relative shrink-0 w-full" data-name="Container">
      <Container5 />
      <Container10 />
      <PrimitiveDiv />
    </div>
  );
}

function App2() {
  return (
    <div className="absolute bottom-0 h-[1499px] left-0 pointer-events-none top-0">
      <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[1499.132px] items-start pointer-events-auto pr-[1.193px] sticky top-0 w-[305.313px]" data-name="App">
        <div aria-hidden className="absolute border-[#e5e7eb] border-r-[1.193px] border-solid inset-0 pointer-events-none shadow-[0px_29.816px_59.631px_0px_rgba(0,0,0,0.25)]" />
        <Container4 />
      </div>
    </div>
  );
}

function Text3() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[normal] relative shrink-0" data-name="Text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#09090a] text-[19.61px] w-[183.845px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Alex
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[17.16px] text-[rgba(31,31,34,0.57)] w-[183.845px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        10 min ago. Public
      </p>
    </div>
  );
}

function Frame1() {
  return <div className="absolute h-[57.185px] left-0 top-[1.29px] w-[1152.656px]" />;
}

function Frame6() {
  return (
    <div className="absolute h-[58.477px] left-[20px] top-[495.09px] w-[1166px]">
      <Frame1 />
    </div>
  );
}

function MdiHeart() {
  return (
    <div className="absolute left-[65.41px] size-[33.643px] top-0" data-name="mdi:heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.6433" preserveAspectRatio="none" viewBox="0 0 33.6433 33.6433" width="33.6433">
        <g id="mdi:heart">
          <path d={svgPaths.p36eb5e80} fill="url(#paint0_linear_0_19)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_19" x1="2.80298" x2="30.8391" y1="17.0666" y2="17.0666">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconamoonCommentLight() {
  return (
    <div className="absolute left-[174.76px] size-[31.541px] top-[1.05px]" data-name="iconamoon:comment-light">
      <svg className="absolute block inset-0 size-full" fill="none" height="31.5406" preserveAspectRatio="none" viewBox="0 0 31.5406 31.5406" width="31.5406">
        <g id="iconamoon:comment-light">
          <path d={svgPaths.p3ebf3d80} id="Vector" stroke="url(#paint0_linear_0_17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.02102" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_17" x1="3.94287" x2="27.5983" y1="15.773" y2="15.773">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[34.172px] left-[-45px] top-[443.7px] w-[1028.441px]">
      <MdiHeart />
      <IconamoonCommentLight />
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[105.57px] text-[16.822px] text-black top-[5.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        23k
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[212.81px] text-[16.822px] text-black top-[7.07px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3k
      </p>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="absolute h-[508px] left-0 overflow-clip rounded-[5.451px] top-0 w-[1910px]" style={{ backgroundImage: "linear-gradient(163.3585691289244deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 95.841%)" }} data-name="Image Container">
      <div className="absolute left-[19.45px] top-[33.85px]" data-name="Profile">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14.708px] items-center relative size-full">
            <div className="bg-gradient-to-r from-[#ff6900] relative rounded-[16px] shrink-0 size-[68.636px] to-[#ca3500] via-1/2 via-[#f54900]" data-name="avatar" />
            <Text3 />
          </div>
        </div>
      </div>
      <div className="absolute border-[#ff6900] border-[1.226px] border-solid h-[292px] left-[20px] rounded-[11.031px] top-[130px] w-[1871px]" style={{ backgroundImage: "linear-gradient(171.12961694626262deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} />
      <Frame6 />
      <Frame2 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[496px] left-0 top-0 w-[1910px]">
      <ImageContainer />
    </div>
  );
}

function Frame3() {
  return (
    <div className="h-[496px] relative shrink-0 w-full">
      <Frame7 />
    </div>
  );
}

function Text4() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[normal] relative shrink-0" data-name="Text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#09090a] text-[19.61px] w-[183.845px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Alex
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[17.16px] text-[rgba(31,31,34,0.57)] w-[183.845px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        10 min ago. Public
      </p>
    </div>
  );
}

function Frame5() {
  return <div className="absolute h-[57.185px] left-0 top-[1.29px] w-[1152.656px]" />;
}

function Frame10() {
  return (
    <div className="absolute h-[58.477px] left-[20px] top-[495.09px] w-[1166px]">
      <Frame5 />
    </div>
  );
}

function MdiHeart1() {
  return (
    <div className="absolute left-[65.41px] size-[33.643px] top-0" data-name="mdi:heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.6433" preserveAspectRatio="none" viewBox="0 0 33.6433 33.6433" width="33.6433">
        <g id="mdi:heart">
          <path d={svgPaths.p36eb5e80} fill="url(#paint0_linear_0_19)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_19" x1="2.80298" x2="30.8391" y1="17.0666" y2="17.0666">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconamoonCommentLight1() {
  return (
    <div className="absolute left-[174.76px] size-[31.541px] top-[1.05px]" data-name="iconamoon:comment-light">
      <svg className="absolute block inset-0 size-full" fill="none" height="31.5406" preserveAspectRatio="none" viewBox="0 0 31.5406 31.5406" width="31.5406">
        <g id="iconamoon:comment-light">
          <path d={svgPaths.p3ebf3d80} id="Vector" stroke="url(#paint0_linear_0_17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.02102" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_17" x1="3.94287" x2="27.5983" y1="15.773" y2="15.773">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[34.172px] left-[-45px] top-[443.7px] w-[1028.441px]">
      <MdiHeart1 />
      <IconamoonCommentLight1 />
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[105.57px] text-[16.822px] text-black top-[5.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        23k
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[212.81px] text-[16.822px] text-black top-[7.07px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3k
      </p>
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="absolute h-[508px] left-0 overflow-clip rounded-[5.451px] top-0 w-[1910px]" style={{ backgroundImage: "linear-gradient(163.3585691289244deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 95.841%)" }} data-name="Image Container">
      <div className="absolute left-[19.45px] top-[33.85px]" data-name="Profile">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14.708px] items-center relative size-full">
            <div className="bg-gradient-to-r from-[#ff6900] relative rounded-[16px] shrink-0 size-[68.636px] to-[#ca3500] via-1/2 via-[#f54900]" data-name="avatar" />
            <Text4 />
          </div>
        </div>
      </div>
      <div className="absolute border-[#ff6900] border-[1.226px] border-solid h-[292px] left-[20px] rounded-[11.031px] top-[130px] w-[1871px]" style={{ backgroundImage: "linear-gradient(171.12961694626262deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} />
      <Frame10 />
      <Frame11 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[496px] left-0 top-0 w-[1910px]">
      <ImageContainer1 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="h-[496px] relative shrink-0 w-full">
      <Frame9 />
    </div>
  );
}

function Text5() {
  return (
    <div className="[word-break:break-word] content-stretch flex flex-col items-start justify-center leading-[normal] relative shrink-0" data-name="Text">
      <p className="font-['Open_Sans:Bold',sans-serif] font-bold relative shrink-0 text-[#09090a] text-[19.61px] w-[183.845px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        Alex
      </p>
      <p className="font-['Open_Sans:Regular',sans-serif] font-normal relative shrink-0 text-[17.16px] text-[rgba(31,31,34,0.57)] w-[183.845px]" style={{ fontVariationSettings: '"wdth" 100' }}>
        10 min ago. Public
      </p>
    </div>
  );
}

function Frame15() {
  return <div className="absolute h-[57.185px] left-0 top-[1.29px] w-[1152.656px]" />;
}

function Frame14() {
  return (
    <div className="absolute h-[58.477px] left-[20px] top-[495.09px] w-[1166px]">
      <Frame15 />
    </div>
  );
}

function MdiHeart2() {
  return (
    <div className="absolute left-[65.41px] size-[33.643px] top-0" data-name="mdi:heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.6433" preserveAspectRatio="none" viewBox="0 0 33.6433 33.6433" width="33.6433">
        <g id="mdi:heart">
          <path d={svgPaths.p36eb5e80} fill="url(#paint0_linear_0_19)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_19" x1="2.80298" x2="30.8391" y1="17.0666" y2="17.0666">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconamoonCommentLight2() {
  return (
    <div className="absolute left-[174.76px] size-[31.541px] top-[1.05px]" data-name="iconamoon:comment-light">
      <svg className="absolute block inset-0 size-full" fill="none" height="31.5406" preserveAspectRatio="none" viewBox="0 0 31.5406 31.5406" width="31.5406">
        <g id="iconamoon:comment-light">
          <path d={svgPaths.p3ebf3d80} id="Vector" stroke="url(#paint0_linear_0_17)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.02102" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_17" x1="3.94287" x2="27.5983" y1="15.773" y2="15.773">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute h-[34.172px] left-[-45px] top-[443.7px] w-[1028.441px]">
      <MdiHeart2 />
      <IconamoonCommentLight2 />
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[105.57px] text-[16.822px] text-black top-[5.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        23k
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[212.81px] text-[16.822px] text-black top-[7.07px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3k
      </p>
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="absolute h-[508px] left-0 overflow-clip rounded-[5.451px] top-0 w-[1910px]" style={{ backgroundImage: "linear-gradient(163.3585691289244deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 95.841%)" }} data-name="Image Container">
      <div className="absolute left-[19.45px] top-[33.85px]" data-name="Profile">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14.708px] items-center relative size-full">
            <div className="bg-gradient-to-r from-[#ff6900] relative rounded-[16px] shrink-0 size-[68.636px] to-[#ca3500] via-1/2 via-[#f54900]" data-name="avatar" />
            <Text5 />
          </div>
        </div>
      </div>
      <div className="absolute border-[#ff6900] border-[1.226px] border-solid h-[292px] left-[20px] rounded-[11.031px] top-[130px] w-[1871px]" style={{ backgroundImage: "linear-gradient(171.12961694626262deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} />
      <Frame14 />
      <Frame16 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="absolute h-[496px] left-0 top-0 w-[1910px]">
      <ImageContainer2 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="h-[496px] relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[24px] items-start left-[336px] top-[341px] w-[1910px]">
      <Frame3 />
      <Frame4 />
      <Frame12 />
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[23.853px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p2c39f180} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[23.853px] left-[28.62px] top-[28.63px] w-[226.767px]" data-name="CardTitle">
      <Icon11 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[33.39px] not-italic text-[19.082px] text-white top-[2.38px] tracking-[-0.3727px] whitespace-nowrap">Últimos Posts Del Wall</p>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex h-[30.309px] items-center justify-center left-[1800px] overflow-clip px-[12.465px] py-[3.116px] rounded-[12.465px] top-[25px] w-[90.927px]" data-name="Badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24.931px] not-italic relative shrink-0 text-[15.954px] text-white whitespace-nowrap">Filters</p>
    </div>
  );
}

function CardContent() {
  return <div className="absolute h-[295.771px] left-0 top-[88.25px] w-[1283.266px]" data-name="CardContent" />;
}

function Card() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[81px] left-[330px] overflow-clip rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] to-[#ca3500] top-[231px] via-1/2 via-[#f54900] w-[1919px]" data-name="Card">
      <CardTitle />
      <Badge />
      <CardContent />
    </div>
  );
}

export default function Web() {
  return (
    <div className="bg-white relative size-full" data-name="Web">
      <Container />
      <App1 />
      <App2 />
      <Frame8 />
      <Card />
    </div>
  );
}