import svgPaths from "./svg-1twps54a85";
import imgImage150 from "./18114d8a928ed9836f194b82b9aa3da76f2f297d.png";

function Icon() {
  return (
    <div className="h-[39.836px] overflow-clip relative shrink-0 w-full" data-name="Icon">
      <div className="absolute inset-[50.01%_16.67%_49.99%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-1.66px_-6.25%]">
          <svg className="block size-full" fill="none" height="3.31966" preserveAspectRatio="none" viewBox="0 0 29.877 3.31966" width="29.877">
            <path d="M1.65983 1.65983H28.2171" id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.31966" />
          </svg>
        </div>
      </div>
      <div className="absolute inset-[75.01%_16.67%_24.99%_16.67%]" data-name="Vector">
        <div className="absolute inset-[-1.66px_-6.25%]">
          <svg className="block size-full" fill="none" height="3.31966" preserveAspectRatio="none" viewBox="0 0 29.877 3.31966" width="29.877">
            <path d="M1.65983 1.65983H28.2171" id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.31966" />
          </svg>
        </div>
      </div>
      <div className="absolute bottom-3/4 left-[16.67%] right-[16.67%] top-1/4" data-name="Vector">
        <div className="absolute inset-[-1.66px_-6.25%]">
          <svg className="block size-full" fill="none" height="3.31966" preserveAspectRatio="none" viewBox="0 0 29.877 3.31966" width="29.877">
            <path d="M1.65983 1.65983H28.2171" id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.31966" />
          </svg>
        </div>
      </div>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex flex-col items-start left-0 pt-[15.934px] px-[15.934px] rounded-[19.918px] size-[71.705px] top-[2.11px]" data-name="Button">
      <Icon />
    </div>
  );
}

function App() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch drop-shadow-[0px_18.453px_13.84px_rgba(0,0,0,0.1),0px_7.381px_5.536px_rgba(0,0,0,0.1)] flex items-center justify-center left-[calc(50%-270.2px)] rounded-[25.835px] size-[73.814px] top-[-2.11px]" style={{ backgroundImage: "linear-gradient(135deg, rgb(255, 105, 0) 0%, rgb(245, 73, 0) 50%, rgb(202, 53, 0) 100%)" }} data-name="App">
      <div className="h-[40.235px] relative shrink-0 w-[56.19px]" data-name="image 150">
        <img alt="" className="absolute bg-clip-padding border-0 border-[transparent] border-solid inset-0 max-w-none object-bottom pointer-events-none size-full" src={imgImage150} />
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="flex-[1_0_0] h-[35.094px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[35.094px] left-0 not-italic text-[#364153] text-[24.566px] top-[-0.95px] tracking-[-0.2639px] whitespace-nowrap">Spanish</p>
      </div>
    </div>
  );
}

function Button1() {
  return (
    <div className="bg-[#f9fafb] content-stretch flex h-[65.378px] items-center px-[29.83px] py-[1.755px] relative rounded-[14.763px] shrink-0 w-[145.518px]" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e7eb] border-[1.755px] border-solid inset-0 pointer-events-none rounded-[14.763px]" />
      <Text />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-[17.55px] size-[35.094px] top-[17.54px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="35.0938" preserveAspectRatio="none" viewBox="0 0 35.0938 35.0938" width="35.0938">
        <g id="Icon">
          <path d={svgPaths.p2ed7b000} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.92448" />
          <path d={svgPaths.p34111400} id="Vector_2" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.92448" />
        </g>
      </svg>
    </div>
  );
}

function Text1() {
  return <div className="absolute bg-[#ff6900] left-[45.62px] opacity-100 rounded-[58877572px] size-[14.038px] top-[10.52px]" data-name="Text" />;
}

function Button2() {
  return (
    <div className="relative rounded-[24.566px] shrink-0 size-[70.188px]" data-name="Button">
      <Icon1 />
      <Text1 />
    </div>
  );
}

function Frame16() {
  return (
    <div className="absolute content-stretch flex gap-[21.09px] items-center left-0 top-0">
      <Button1 />
      <Button2 />
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[70.188px] left-[537.79px] top-[3.62px] w-[283.108px]" data-name="Container">
      <Frame16 />
    </div>
  );
}

function Frame17() {
  return (
    <div className="absolute h-[73.814px] left-[31.64px] top-[145.52px] w-[778.714px]">
      <Button />
      <App />
      <Container />
    </div>
  );
}

function Heading() {
  return (
    <div className="absolute h-[47.705px] left-0 top-0 w-[499.824px]" data-name="Heading 1">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Inter:Regular',sans-serif] font-normal leading-[47.705px] left-[0.72px] not-italic text-[42.935px] text-[transparent] top-[0.52px] tracking-[0.4402px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(16, 24, 40) 0%, rgb(245, 73, 0) 100%)" }}>
        Welcome Back, User! 👋
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[41.546px] left-0 top-[62.47px] w-[725.483px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[41.546px] left-[4.63px] not-italic text-[#4a5565] text-[27.697px] top-[0.76px] tracking-[-0.541px] whitespace-nowrap">{`Here's what's happening with your performance today`}</p>
    </div>
  );
}

function Frame23() {
  return (
    <div className="h-[104.014px] relative shrink-0 w-[725.483px]">
      <Heading />
      <Paragraph />
    </div>
  );
}

function App1() {
  return (
    <div className="content-stretch flex flex-col h-[86.467px] items-start relative shrink-0 w-[499.824px]" data-name="App">
      <Frame23 />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-0 size-[34.274px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="34.2744" preserveAspectRatio="none" viewBox="0 0 34.2744 34.2744" width="34.2744">
        <g id="Icon">
          <path d={svgPaths.p1a3cdcc0} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.85625" />
          <path d={svgPaths.p34c65480} id="Vector_2" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.85625" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="absolute h-[33.743px] left-[34.69px] top-[22.03px] w-[364.85px]" data-name="CardTitle">
      <Icon2 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[27.42px] left-[47.98px] not-italic text-[#0a0a0a] text-[27.42px] top-[3.43px] tracking-[-0.5355px] whitespace-nowrap">Achievements | Trophies</p>
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-[-10.54px] size-[40.07px] top-[6.33px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="40.0703" preserveAspectRatio="none" viewBox="0 0 40.0703 40.0703" width="40.0703">
        <g id="Icon">
          <path d={svgPaths.pe114080} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33919" />
          <path d={svgPaths.p1733cc00} id="Vector_2" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33919" />
        </g>
      </svg>
    </div>
  );
}

function Frame13() {
  return (
    <div className="-translate-x-1/2 absolute h-[54.833px] left-[calc(50%-15.82px)] top-0 w-[122.32px]">
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#ff6900] leading-[53.252px] left-[30.25px] not-italic text-[39.939px] text-[transparent] to-[#ca3500] top-0 tracking-[0.3705px] via-1/2 via-[#f54900] whitespace-nowrap">Gold</p>
      <Icon3 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="h-[54.833px] relative shrink-0 w-full">
      <Frame13 />
    </div>
  );
}

function Frame12() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%+159.23px)] top-[11.49px] w-[170.826px]">
      <Frame11 />
    </div>
  );
}

function Button3() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[18.981px] items-start left-[calc(50%+319.51px)] top-[26.25px] w-[94.903px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27.07px] not-italic relative shrink-0 text-[#f54900] text-[20.302px] whitespace-nowrap">View All →</p>
    </div>
  );
}

function Card() {
  return (
    <div className="absolute border-[#ffd6a7] border-[1.163px] border-solid drop-shadow-[0px_11.632px_8.724px_rgba(0,0,0,0.1)] h-[82.25px] left-0 rounded-[16.284px] top-0 w-[801.406px]" style={{ backgroundImage: "linear-gradient(174.14016017119053deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card">
      <CardTitle />
      <Frame12 />
      <Button3 />
    </div>
  );
}

function Frame22() {
  return (
    <div className="h-[82.25px] relative shrink-0 w-[801.406px]">
      <Card />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-0 size-[29.57px] top-[-1.05px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="29.5701" preserveAspectRatio="none" viewBox="0 0 29.5701 29.5701" width="29.5701">
        <g id="Icon">
          <path d={svgPaths.p9f9fee0} id="Vector" stroke="#FFEDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.46418" />
          <path d={svgPaths.p11af2d20} id="Vector_2" stroke="#FFEDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.46418" />
        </g>
      </svg>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardDescription">
      <Icon4 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[44.355px] left-[31.7px] not-italic text-[#ffedd4] text-[27.459px] top-[-12.65px] tracking-[-0.5775px] whitespace-nowrap">In</p>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="CardTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[47.705px] left-0 not-italic text-[42.935px] text-white top-0 tracking-[0.4402px] whitespace-nowrap">120</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute gap-x-[7.15576171875px] gap-y-[16.87169647216797px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__28.62px_minmax(0,1fr)] h-[126.418px] left-0 pb-[14.312px] pt-[28.623px] px-[28.623px] top-0 w-[627.322px]" data-name="CardHeader">
      <CardDescription />
      <CardTitle1 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-[11.41px] size-[17.111px] top-[5.7px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.1115" preserveAspectRatio="none" viewBox="0 0 17.1115 17.1115" width="17.1115">
        <g id="Icon">
          <path d={svgPaths.p374943b0} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42596" />
          <path d={svgPaths.p2ed68d00} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42596" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[29.525px] left-[-7.53px] overflow-clip rounded-[11.408px] top-[-3.2px] w-[88.576px]" data-name="Badge">
      <Icon5 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.815px] left-[39.93px] not-italic text-[17.111px] text-white top-[2.85px] whitespace-nowrap">+12%</p>
    </div>
  );
}

function Text2() {
  return (
    <div className="absolute h-[23.853px] left-[91.16px] top-0 w-[102.79px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[23.853px] left-0 not-italic text-[18.812px] text-white top-0 tracking-[-0.1794px] whitespace-nowrap">vs last month</p>
    </div>
  );
}

function App2() {
  return (
    <div className="absolute h-[23.853px] left-[28.62px] top-[155.04px] w-[570.076px]" data-name="App">
      <Badge />
      <Text2 />
    </div>
  );
}

function App3() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[172.21px] rounded-[40017884px] size-[152.656px] top-[-74.94px]" data-name="App" />;
}

function Card1() {
  return (
    <div className="h-[206.678px] overflow-clip relative rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] shrink-0 w-[259.402px]" style={{ backgroundImage: "linear-gradient(141.4539862383746deg, rgb(245, 73, 0) 0%, rgb(248, 81, 1) 100%)" }} data-name="Card">
      <CardHeader />
      <App2 />
      <App3 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute flex items-center justify-center left-0 size-[29.57px] top-[-1.05px]">
      <div className="flex-none rotate-90">
        <div className="relative size-[29.57px]" data-name="Icon">
          <svg className="absolute block inset-0 size-full" fill="none" height="29.5701" preserveAspectRatio="none" viewBox="0 0 29.5701 29.5701" width="29.5701">
            <g id="Icon">
              <path d={svgPaths.p2acd4f80} id="Vector" stroke="#FFEDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.46418" />
              <path d={svgPaths.p70fd300} id="Vector_2" stroke="#FFEDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.46418" />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardDescription">
      <Icon6 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[48.506px] leading-[44.355px] left-[31.7px] not-italic text-[#ffedd4] text-[27.459px] top-[-10.54px] tracking-[-0.5775px] w-[46.397px]">Out</p>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="CardTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[47.705px] left-0 not-italic text-[42.935px] text-white top-0 tracking-[0.4402px] whitespace-nowrap">650</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="absolute gap-x-[7.15576171875px] gap-y-[16.87169647216797px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__28.62px_minmax(0,1fr)] h-[126.418px] left-0 pb-[14.312px] pt-[28.623px] px-[28.623px] top-0 w-[627.322px]" data-name="CardHeader">
      <CardDescription1 />
      <CardTitle2 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-[11.41px] size-[17.111px] top-[5.7px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.1115" preserveAspectRatio="none" viewBox="0 0 17.1115 17.1115" width="17.1115">
        <g id="Icon">
          <path d={svgPaths.p348bb900} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42596" />
          <path d={svgPaths.p115f9c40} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42596" />
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[29.525px] left-[-7.53px] overflow-clip rounded-[11.408px] top-[-3.2px] w-[88.576px]" data-name="Badge">
      <Icon7 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.815px] left-[39.93px] not-italic text-[17.111px] text-white top-[2.85px] whitespace-nowrap">+8%</p>
    </div>
  );
}

function Text3() {
  return (
    <div className="absolute h-[23.853px] left-[91.16px] top-0 w-[102.79px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[23.853px] left-0 not-italic text-[18.812px] text-white top-0 tracking-[-0.1794px] whitespace-nowrap">vs last month</p>
    </div>
  );
}

function App4() {
  return (
    <div className="absolute h-[23.853px] left-[28.62px] top-[155.04px] w-[570.076px]" data-name="App">
      <Badge1 />
      <Text3 />
    </div>
  );
}

function App5() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[214.39px] rounded-[40017884px] size-[152.656px] top-[-74.94px]" data-name="App" />;
}

function Card2() {
  return (
    <div className="h-[206.678px] overflow-clip relative rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] shrink-0 w-[259.402px]" style={{ backgroundImage: "linear-gradient(141.4539862383746deg, rgb(255, 137, 4) 0%, rgb(255, 105, 0) 100%)" }} data-name="Card">
      <CardHeader1 />
      <App4 />
      <App5 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[-1.21px] size-[24.103px] top-[0.9px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="24.1027" preserveAspectRatio="none" viewBox="0 0 24.1027 24.1027" width="24.1027">
        <g id="Icon">
          <path d="M12.0496 2V22.0856" id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.00856" />
          <path d={svgPaths.pd37d300} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.00856" />
        </g>
      </svg>
    </div>
  );
}

function CardDescription2() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardDescription">
      <Icon8 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[28.623px] left-[26.51px] not-italic text-[23.304px] text-white top-0 tracking-[-0.3727px] whitespace-nowrap">Balance</p>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="CardTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[47.705px] left-[0.18px] not-italic text-[42.935px] text-white top-[-0.16px] tracking-[0.4402px] whitespace-nowrap">1,683 Pts</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="absolute gap-x-[7.15576171875px] gap-y-[16.87169647216797px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__28.62px_minmax(0,1fr)] h-[126.418px] left-0 pb-[14.312px] pt-[28.623px] px-[28.623px] top-0 w-[627.322px]" data-name="CardHeader">
      <CardDescription2 />
      <CardTitle3 />
    </div>
  );
}

function Icon9() {
  return (
    <div className="absolute left-[11.41px] size-[17.111px] top-[5.7px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="17.1115" preserveAspectRatio="none" viewBox="0 0 17.1115 17.1115" width="17.1115">
        <g id="Icon">
          <path d={svgPaths.p12297f20} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42596" />
          <path d={svgPaths.p1dddbc00} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.42596" />
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] h-[29.525px] left-[-7.53px] overflow-clip rounded-[11.408px] top-[-3.2px] w-[88.576px]" data-name="Badge">
      <Icon9 />
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[22.815px] left-[39.93px] not-italic text-[17.111px] text-white top-[2.85px] whitespace-nowrap">+2%</p>
    </div>
  );
}

function Text4() {
  return (
    <div className="absolute h-[23.853px] left-[91.16px] top-0 w-[102.79px]" data-name="Text">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[23.853px] left-0 not-italic text-[18.812px] text-white top-0 tracking-[-0.1794px] whitespace-nowrap">vs last month</p>
    </div>
  );
}

function App6() {
  return (
    <div className="absolute h-[23.853px] left-[28.62px] top-[155.04px] w-[570.076px]" data-name="App">
      <Badge2 />
      <Text4 />
    </div>
  );
}

function App7() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[252.36px] rounded-[40017884px] size-[152.656px] top-[-62.29px]" data-name="App" />;
}

function Card3() {
  return (
    <div className="h-[206.678px] overflow-clip relative rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] shrink-0 w-[259.402px]" style={{ backgroundImage: "linear-gradient(141.4539862383746deg, rgb(255, 105, 0) 0%, rgb(245, 73, 0) 100%)" }} data-name="Card">
      <CardHeader2 />
      <App6 />
      <App7 />
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex gap-[12.654px] h-[206.678px] items-center relative shrink-0 w-[803.515px]">
      <Card1 />
      <Card2 />
      <Card3 />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-0 size-[29.857px] top-[2.98px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="29.8568" preserveAspectRatio="none" viewBox="0 0 29.8568 29.8568" width="29.8568">
        <g id="Icon">
          <path d={svgPaths.p32a5fa80} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.48807" />
        </g>
      </svg>
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[37.894px] left-0 top-[-4.18px] w-[204.203px]">
      <Icon10 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[35.828px] left-[41.8px] not-italic text-[#0a0a0a] text-[23.885px] top-0 tracking-[-0.4665px] whitespace-nowrap">Ranking Actual</p>
    </div>
  );
}

function CardTitle4() {
  return (
    <div className="absolute h-[27.916px] left-0 top-0 w-[204.297px]" data-name="CardTitle">
      <Frame20 />
    </div>
  );
}

function App8() {
  return (
    <div className="absolute h-[27.916px] left-[28.73px] top-[25.86px] w-[553.662px]" data-name="App">
      <CardTitle4 />
    </div>
  );
}

function Frame7() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute h-[102.263px] left-1/2 not-italic top-[74.24px] w-[139.191px] whitespace-nowrap">
      <p className="absolute bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#ff6900] leading-[71.727px] left-[36.93px] text-[53.796px] text-[transparent] to-[#ca3500] top-0 tracking-[0.4991px] via-1/2 via-[#f54900]">#1</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.898px] left-[calc(50%-89.48px)] text-[#6a7282] text-[18.828px] top-[73.86px] tracking-[-0.2023px]">#1 of 2210 Members</p>
    </div>
  );
}

function Button4() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[18.981px] items-start left-[calc(50%+1.05px)] top-[190.75px] w-[94.903px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27.07px] not-italic relative shrink-0 text-[#f54900] text-[20.302px] whitespace-nowrap">View All →</p>
    </div>
  );
}

function Card4() {
  return (
    <div className="border-[#ffd6a7] border-[1.163px] border-solid drop-shadow-[0px_11.632px_8.724px_rgba(0,0,0,0.1)] h-[238.313px] relative rounded-[16.284px] shrink-0 w-[392.267px]" style={{ backgroundImage: "linear-gradient(148.72019545950525deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card">
      <App8 />
      <Frame7 />
      <Button4 />
    </div>
  );
}

function Frame8() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute h-[102.263px] left-[calc(50%-1.05px)] not-italic top-[78.98px] w-[139.191px] whitespace-nowrap">
      <p className="absolute bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#ff6900] leading-[71.727px] left-[32.71px] text-[53.796px] text-[transparent] to-[#ca3500] top-0 tracking-[0.4991px] via-1/2 via-[#f54900]">66</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[26.898px] left-[calc(50%-51.67px)] text-[#6a7282] text-[18.828px] top-[67.53px] tracking-[-0.2023px]">Total Points</p>
    </div>
  );
}

function Icon11() {
  return (
    <div className="absolute left-0 size-[29.857px] top-[2.98px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="29.8568" preserveAspectRatio="none" viewBox="0 0 29.8568 29.8568" width="29.8568">
        <g id="Icon">
          <path d={svgPaths.p32a5fa80} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.48807" />
        </g>
      </svg>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute h-[37.894px] left-0 top-[-4.18px] w-[204.203px]">
      <Icon11 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[35.828px] left-[41.8px] not-italic text-[#0a0a0a] text-[23.885px] top-0 tracking-[-0.4665px] whitespace-nowrap">Program Balance</p>
    </div>
  );
}

function CardTitle5() {
  return (
    <div className="absolute h-[27.916px] left-0 top-0 w-[204.297px]" data-name="CardTitle">
      <Frame24 />
    </div>
  );
}

function App9() {
  return (
    <div className="absolute h-[27.916px] left-[28.73px] top-[25.86px] w-[553.662px]" data-name="App">
      <CardTitle5 />
    </div>
  );
}

function Button5() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[18.981px] items-start left-[calc(50%+1.05px)] top-[190.75px] w-[94.903px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[27.07px] not-italic relative shrink-0 text-[#f54900] text-[20.302px] whitespace-nowrap">View All →</p>
    </div>
  );
}

function Card5() {
  return (
    <div className="border-[#ffd6a7] border-[1.163px] border-solid drop-shadow-[0px_11.632px_8.724px_rgba(0,0,0,0.1)] h-[238.313px] relative rounded-[16.284px] shrink-0 w-[392.267px]" style={{ backgroundImage: "linear-gradient(148.72019545950525deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card">
      <Frame8 />
      <App9 />
      <Button5 />
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[16.872px] items-center relative shrink-0 w-full">
      <Card4 />
      <Card5 />
    </div>
  );
}

function Frame21() {
  return (
    <div className="content-stretch flex flex-col gap-[44.288px] items-start relative shrink-0 w-full">
      <App1 />
      <Frame22 />
      <Frame />
      <Frame19 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="relative shrink-0 size-[34.212px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="34.2119" preserveAspectRatio="none" viewBox="0 0 34.2119 34.2119" width="34.2119">
        <g id="Icon">
          <path d={svgPaths.p164ed600} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.85099" />
          <path d="M4.42214 8.59182H29.7874" id="Vector_2" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.85099" />
          <path d={svgPaths.p2c50d00} id="Vector_3" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.85099" />
        </g>
      </svg>
    </div>
  );
}

function Frame25() {
  return (
    <div className="absolute content-stretch flex gap-[10.545px] items-center left-[3.6px] top-[-3.21px]">
      <Icon12 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] not-italic relative shrink-0 text-[#0a0a0a] text-[23.895px] tracking-[-0.3727px] whitespace-nowrap">Products Catalog</p>
    </div>
  );
}

function CardTitle6() {
  return (
    <div className="absolute h-[23.853px] left-[28.62px] top-[34.95px] w-[1226.021px]" data-name="CardTitle">
      <Frame25 />
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[15.393px] row-1 self-stretch shrink-0" data-name="Primitive.button">
      <div aria-hidden className="absolute border-[#ff8d28] border-[1.099px] border-solid inset-0 pointer-events-none rounded-[15.393px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[9.895px] py-[5.497px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21.99px] not-italic relative shrink-0 text-[#0a0a0a] text-[15.393px] tracking-[-0.1654px] whitespace-nowrap">Product Gallery</p>
        </div>
      </div>
    </div>
  );
}

function Icon13() {
  return <div className="absolute left-[234.74px] size-[17.592px] top-[4.19px]" data-name="Icon" />;
}

function Frame26() {
  return (
    <div className="absolute h-[23.331px] left-[140.96px] top-[9.76px] w-[89.436px]">
      <div className="absolute inset-[24.99%_84.78%_25.01%_0]" data-name="Vector">
        <div className="absolute inset-[-6.28%_-5.39%]">
          <svg className="block size-full" fill="none" height="13.1316" preserveAspectRatio="none" viewBox="0 0 15.0758 13.1316" width="15.0758">
            <path d={svgPaths.pd41c580} id="Vector" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.46599" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[21.99px] left-[21.39px] not-italic text-[#0a0a0a] text-[15.393px] top-0 tracking-[-0.1654px] whitespace-nowrap">Favorites</p>
    </div>
  );
}

function PrimitiveButton1() {
  return (
    <div className="col-2 h-[31.885px] justify-self-stretch relative rounded-[15.393px] row-1 shrink-0" data-name="Primitive.button">
      <div aria-hidden className="absolute border-[1.099px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[15.393px]" />
      <Icon13 />
      <Frame26 />
    </div>
  );
}

function TabList() {
  return (
    <div className="absolute bg-[#ececf0] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[48.607px] left-[28.47px] px-[3.298px] py-[3.848px] rounded-[15.393px] top-[106.11px] w-[748.541px]" data-name="Tab List">
      <PrimitiveButton />
      <PrimitiveButton1 />
    </div>
  );
}

function Icon14() {
  return (
    <div className="absolute left-[136.36px] size-[61.571px] top-[45.42px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="61.5714" preserveAspectRatio="none" viewBox="0 0 61.5714 61.5714" width="61.5714">
        <g id="Icon">
          <path d={svgPaths.p423de80} id="Vector" stroke="url(#paint0_linear_0_42)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.13095" />
          <path d="M7.96064 15.4807H53.6107" id="Vector_2" stroke="url(#paint1_linear_0_42)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.13095" />
          <path d={svgPaths.pe787980} id="Vector_3" stroke="url(#paint2_linear_0_42)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.13095" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_42" x1="20.5259" x2="41.0497" y1="30.7852" y2="30.7852">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_42" x1="7.96064" x2="53.6107" y1="15.9807" y2="15.9807">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_42" x1="7.69702" x2="53.8756" y1="30.7876" y2="30.7876">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-white border-[1.099px] border-[rgba(0,0,0,0)] border-solid h-[24.189px] left-[12.11px] overflow-clip rounded-[8.796px] shadow-[0px_1.099px_3.298px_0px_rgba(0,0,0,0.1),0px_1.099px_2.199px_-1.099px_rgba(0,0,0,0.1)] top-[172.93px] w-[77.411px]" data-name="Badge">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.592px] left-[8.8px] not-italic text-[#f54900] text-[13.194px] top-[2.2px] w-[58.273px]">2000 pts</p>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="absolute h-[209.98px] left-[18.2px] overflow-clip right-[18.48px] rounded-[10.995px] top-[17.04px]" style={{ backgroundImage: "linear-gradient(147.26477372789242deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} data-name="ProductCard">
      <Icon14 />
      <Badge3 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[21.99px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.99px] left-[3.32px] not-italic text-[#101828] text-[15.393px] top-[-2.96px] tracking-[-0.1654px] whitespace-nowrap">Product 01</p>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[13.194px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.1939" preserveAspectRatio="none" viewBox="0 0 13.1939 13.1939" width="13.1939">
        <g clipPath="url(#clip0_0_23)" id="Icon">
          <path d={svgPaths.p39183500} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09949" />
        </g>
        <defs>
          <clipPath id="clip0_0_23">
            <rect fill="white" height="13.1939" width="13.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[13.194px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.1939" preserveAspectRatio="none" viewBox="0 0 13.1939 13.1939" width="13.1939">
        <g clipPath="url(#clip0_0_19)" id="Icon">
          <path d={svgPaths.pa2701b1} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09949" />
        </g>
        <defs>
          <clipPath id="clip0_0_19">
            <rect fill="white" height="13.1939" width="13.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[13.194px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.1939" preserveAspectRatio="none" viewBox="0 0 13.1939 13.1939" width="13.1939">
        <g clipPath="url(#clip0_0_8)" id="Icon">
          <path d={svgPaths.p348e480} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09949" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="13.1939" width="13.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon18() {
  return (
    <div className="relative shrink-0 size-[13.194px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.1939" preserveAspectRatio="none" viewBox="0 0 13.1939 13.1939" width="13.1939">
        <g clipPath="url(#clip0_0_21)" id="Icon">
          <path d={svgPaths.p2eb9da00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09949" />
        </g>
        <defs>
          <clipPath id="clip0_0_21">
            <rect fill="white" height="13.1939" width="13.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[13.194px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.1939" preserveAspectRatio="none" viewBox="0 0 13.1939 13.1939" width="13.1939">
        <g clipPath="url(#clip0_0_62)" id="Icon">
          <path d={svgPaths.p1f611380} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09949" />
        </g>
        <defs>
          <clipPath id="clip0_0_62">
            <rect fill="white" height="13.1939" width="13.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container2() {
  return (
    <div className="content-stretch flex gap-[4.398px] h-[13.194px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon15 />
      <Icon16 />
      <Icon17 />
      <Icon18 />
      <Icon19 />
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.398px] h-[39.582px] items-start left-[17.59px] right-[17.59px] top-[237.72px]" data-name="ProductCard">
      <Heading1 />
      <Container2 />
    </div>
  );
}

function ProductCard2() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[39.582px] left-[17.59px] right-[17.59px] rounded-[10.995px] to-[#f54900] top-[296.33px]" data-name="ProductCard">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.99px] left-[167.8px] not-italic text-[15.393px] text-center text-white top-[5.84px] tracking-[-0.1654px] whitespace-nowrap">Redeem</p>
    </div>
  );
}

function Container1() {
  return (
    <div className="bg-white border-[#ffd6a7] border-[1.099px] border-solid drop-shadow-[0px_4.398px_3.298px_rgba(0,0,0,0.1)] h-[361.633px] relative rounded-[15.393px] shrink-0 w-[365.522px]" data-name="Container">
      <ProductCard />
      <ProductCard1 />
      <ProductCard2 />
    </div>
  );
}

function Icon20() {
  return (
    <div className="absolute left-[136.36px] size-[61.571px] top-[45.42px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="61.5714" preserveAspectRatio="none" viewBox="0 0 61.5714 61.5714" width="61.5714">
        <g id="Icon">
          <path d={svgPaths.p423de80} id="Vector" stroke="url(#paint0_linear_0_13)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.13095" />
          <path d="M7.96073 15.4807H53.6108" id="Vector_2" stroke="url(#paint1_linear_0_13)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.13095" />
          <path d={svgPaths.pe787980} id="Vector_3" stroke="url(#paint2_linear_0_13)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.13095" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_13" x1="20.5259" x2="41.0497" y1="30.7852" y2="30.7852">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_13" x1="7.96073" x2="53.6108" y1="15.9807" y2="15.9807">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_13" x1="7.69702" x2="53.8756" y1="30.7876" y2="30.7876">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Badge4() {
  return (
    <div className="absolute bg-white border-[1.099px] border-[rgba(0,0,0,0)] border-solid h-[24.189px] left-[12.11px] overflow-clip rounded-[8.796px] shadow-[0px_1.099px_3.298px_0px_rgba(0,0,0,0.1),0px_1.099px_2.199px_-1.099px_rgba(0,0,0,0.1)] top-[172.93px] w-[77.411px]" data-name="Badge">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[17.592px] left-[8.8px] not-italic text-[#f54900] text-[13.194px] top-[2.2px] w-[58.273px]">2000 pts</p>
    </div>
  );
}

function ProductCard3() {
  return (
    <div className="absolute h-[209.98px] left-[18.2px] overflow-clip right-[18.48px] rounded-[10.995px] top-[17.04px]" style={{ backgroundImage: "linear-gradient(147.26477372789242deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} data-name="ProductCard">
      <Icon20 />
      <Badge4 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[21.99px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.99px] left-[3.32px] not-italic text-[#101828] text-[15.393px] top-[-2.96px] tracking-[-0.1654px] whitespace-nowrap">Product 01</p>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[13.194px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.1939" preserveAspectRatio="none" viewBox="0 0 13.1939 13.1939" width="13.1939">
        <g clipPath="url(#clip0_0_23)" id="Icon">
          <path d={svgPaths.p39183500} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09949" />
        </g>
        <defs>
          <clipPath id="clip0_0_23">
            <rect fill="white" height="13.1939" width="13.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[13.194px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.1939" preserveAspectRatio="none" viewBox="0 0 13.1939 13.1939" width="13.1939">
        <g clipPath="url(#clip0_0_19)" id="Icon">
          <path d={svgPaths.pa2701b1} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09949" />
        </g>
        <defs>
          <clipPath id="clip0_0_19">
            <rect fill="white" height="13.1939" width="13.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[13.194px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.1939" preserveAspectRatio="none" viewBox="0 0 13.1939 13.1939" width="13.1939">
        <g clipPath="url(#clip0_0_8)" id="Icon">
          <path d={svgPaths.p348e480} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09949" />
        </g>
        <defs>
          <clipPath id="clip0_0_8">
            <rect fill="white" height="13.1939" width="13.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon24() {
  return (
    <div className="relative shrink-0 size-[13.194px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.1939" preserveAspectRatio="none" viewBox="0 0 13.1939 13.1939" width="13.1939">
        <g clipPath="url(#clip0_0_21)" id="Icon">
          <path d={svgPaths.p2eb9da00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09949" />
        </g>
        <defs>
          <clipPath id="clip0_0_21">
            <rect fill="white" height="13.1939" width="13.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[13.194px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="13.1939" preserveAspectRatio="none" viewBox="0 0 13.1939 13.1939" width="13.1939">
        <g clipPath="url(#clip0_0_62)" id="Icon">
          <path d={svgPaths.p1f611380} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.09949" />
        </g>
        <defs>
          <clipPath id="clip0_0_62">
            <rect fill="white" height="13.1939" width="13.1939" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container4() {
  return (
    <div className="content-stretch flex gap-[4.398px] h-[13.194px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon21 />
      <Icon22 />
      <Icon23 />
      <Icon24 />
      <Icon25 />
    </div>
  );
}

function ProductCard4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.398px] h-[39.582px] items-start left-[17.59px] right-[17.59px] top-[237.72px]" data-name="ProductCard">
      <Heading2 />
      <Container4 />
    </div>
  );
}

function ProductCard5() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[39.582px] left-[17.59px] right-[17.59px] rounded-[10.995px] to-[#f54900] top-[296.33px]" data-name="ProductCard">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.99px] left-[167.81px] not-italic text-[15.393px] text-center text-white top-[5.84px] tracking-[-0.1654px] whitespace-nowrap">Redeem</p>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-white border-[#ffd6a7] border-[1.099px] border-solid drop-shadow-[0px_4.398px_3.298px_rgba(0,0,0,0.1)] h-[361.633px] relative rounded-[15.393px] shrink-0 w-[365.522px]" data-name="Container">
      <ProductCard3 />
      <ProductCard4 />
      <ProductCard5 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[17.498px] items-center left-[28.61px] top-[183.23px]">
      <Container1 />
      <Container3 />
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex h-[25.947px] items-start left-[671.7px] top-[32.69px] w-[95.654px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[25.947px] not-italic relative shrink-0 text-[#f54900] text-[19.46px] whitespace-nowrap">View All →</p>
    </div>
  );
}

function Card6() {
  return (
    <div className="bg-white border-[1.054px] border-[rgba(255,105,0,0.34)] border-solid h-[605.272px] overflow-clip relative rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] shrink-0 w-full" data-name="Card">
      <CardTitle6 />
      <TabList />
      <Frame1 />
      <Button6 />
    </div>
  );
}

function Icon26() {
  return (
    <div className="absolute left-0 size-[30.496px] top-[3.05px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="30.496" preserveAspectRatio="none" viewBox="0 0 30.496 30.496" width="30.496">
        <g id="Icon">
          <path d={svgPaths.p117cd400} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.54134" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle7() {
  return (
    <div className="absolute h-[36.595px] left-[37.66px] top-[36.68px] w-[267.817px]" data-name="CardTitle">
      <Icon26 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[36.595px] left-[42.69px] not-italic text-[#0a0a0a] text-[24.397px] top-0 tracking-[-0.4765px] whitespace-nowrap">Recent Transactions</p>
    </div>
  );
}

function Button7() {
  return (
    <div className="absolute content-stretch flex h-[24.397px] items-start left-[673.53px] top-[37.39px] w-[89.939px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] not-italic relative shrink-0 text-[#f54900] text-[18.298px] whitespace-nowrap">View All →</p>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[54.833px] items-start left-[67.49px] p-[15.248px] top-[6.33px] w-[75.923px]" data-name="Header Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24.397px] min-w-px not-italic relative text-[18.298px] text-white">Date</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[54.833px] items-start left-[286.82px] p-[15.248px] top-[6.33px] w-[105.448px]" data-name="Header Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24.397px] min-w-px not-italic relative text-[18.298px] text-white">Details</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[54.833px] items-start left-[558.88px] p-[15.248px] top-[6.33px] w-[113.884px]" data-name="Header Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[24.397px] min-w-px not-italic relative text-[18.298px] text-white">Amount</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[61.16px] left-[-3.6px] to-[#f54900] top-[-7.17px] w-[736.028px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[54.893px] left-[-2.52px] top-[2.65px] w-[722.756px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TransactionRow() {
  return (
    <div className="absolute h-[64.804px] left-[59.05px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow1() {
  return (
    <div className="absolute h-[64.804px] left-[283.32px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[19.82px] whitespace-nowrap">Purchase</p>
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-[#ffedd4] h-[33.546px] left-[15.07px] rounded-[12.198px] top-[16.15px] w-[84.102px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.723px] py-[4.575px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] not-italic relative shrink-0 text-[#ca3500] text-[18.298px] whitespace-nowrap">+100K</p>
      </div>
      <div aria-hidden className="absolute border-[1.525px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.198px]" />
    </div>
  );
}

function TransactionRow2() {
  return (
    <div className="absolute h-[65.378px] left-[546.84px] top-[-0.91px] w-[99.121px]" data-name="TransactionRow">
      <Badge5 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[64.804px] left-0 top-0 w-[722.756px]" data-name="Table Row">
      <TransactionRow />
      <TransactionRow1 />
      <TransactionRow2 />
    </div>
  );
}

function TransactionRow3() {
  return (
    <div className="absolute h-[64.804px] left-[56.94px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow4() {
  return (
    <div className="absolute h-[64.804px] left-[281.21px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[19.82px] whitespace-nowrap">Purchase</p>
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-[#ffedd4] h-[33.546px] left-[15.25px] rounded-[12.198px] top-[15.25px] w-[84.102px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.723px] py-[4.575px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] not-italic relative shrink-0 text-[#ca3500] text-[18.298px] whitespace-nowrap">+100K</p>
      </div>
      <div aria-hidden className="absolute border-[1.525px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.198px]" />
    </div>
  );
}

function TransactionRow5() {
  return (
    <div className="absolute h-[64.804px] left-[548.76px] top-0 w-[252.021px]" data-name="TransactionRow">
      <Badge6 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[64.804px] left-0 top-[196.83px] w-[722.756px]" data-name="Table Row">
      <TransactionRow3 />
      <TransactionRow4 />
      <TransactionRow5 />
    </div>
  );
}

function TransactionRow6() {
  return (
    <div className="absolute h-[65.566px] left-[56.94px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[20.58px] whitespace-nowrap">02-01</p>
    </div>
  );
}

function TransactionRow7() {
  return (
    <div className="absolute h-[65.566px] left-[289.65px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[20.59px] whitespace-nowrap">Refund</p>
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[33.546px] left-[15.25px] rounded-[12.198px] top-[16.01px] w-[71.666px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.723px] py-[4.575px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] not-italic relative shrink-0 text-[#364153] text-[18.298px] whitespace-nowrap">-20K</p>
      </div>
      <div aria-hidden className="absolute border-[1.525px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.198px]" />
    </div>
  );
}

function TransactionRow8() {
  return (
    <div className="absolute h-[65.566px] left-[550.87px] top-0 w-[252.021px]" data-name="TransactionRow">
      <Badge7 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[65.566px] left-0 top-[64.81px] w-[722.756px]" data-name="Table Row">
      <TransactionRow6 />
      <TransactionRow7 />
      <TransactionRow8 />
    </div>
  );
}

function TransactionRow9() {
  return (
    <div className="absolute h-[65.566px] left-[56.94px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[20.58px] whitespace-nowrap">02-01</p>
    </div>
  );
}

function TransactionRow10() {
  return (
    <div className="absolute h-[65.566px] left-[293.87px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[20.59px] whitespace-nowrap">Refund</p>
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[33.546px] left-[15.25px] rounded-[12.198px] top-[16.01px] w-[71.666px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.723px] py-[4.575px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] not-italic relative shrink-0 text-[#364153] text-[18.298px] whitespace-nowrap">-20K</p>
      </div>
      <div aria-hidden className="absolute border-[1.525px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.198px]" />
    </div>
  );
}

function TransactionRow11() {
  return (
    <div className="absolute h-[65.566px] left-[552.98px] top-0 w-[252.021px]" data-name="TransactionRow">
      <Badge8 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[65.566px] left-0 top-[261.64px] w-[722.756px]" data-name="Table Row">
      <TransactionRow9 />
      <TransactionRow10 />
      <TransactionRow11 />
    </div>
  );
}

function TransactionRow12() {
  return (
    <div className="absolute h-[65.566px] left-[56.94px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[20.59px] whitespace-nowrap">03-01</p>
    </div>
  );
}

function TransactionRow13() {
  return (
    <div className="absolute h-[65.566px] left-[300.19px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[20.59px] whitespace-nowrap">Sale</p>
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-[#ffedd4] h-[33.546px] left-[13.14px] rounded-[12.198px] top-[16.01px] w-[86.318px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.723px] py-[4.575px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] not-italic relative shrink-0 text-[#ca3500] text-[18.298px] whitespace-nowrap">+250K</p>
      </div>
      <div aria-hidden className="absolute border-[1.525px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.198px]" />
    </div>
  );
}

function TransactionRow14() {
  return (
    <div className="absolute h-[65.566px] left-[548.76px] top-0 w-[252.021px]" data-name="TransactionRow">
      <Badge9 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[65.566px] left-0 top-[130.37px] w-[722.756px]" data-name="Table Row">
      <TransactionRow12 />
      <TransactionRow13 />
      <TransactionRow14 />
    </div>
  );
}

function TransactionRow15() {
  return (
    <div className="absolute h-[65.566px] left-[56.94px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[20.59px] whitespace-nowrap">03-01</p>
    </div>
  );
}

function TransactionRow16() {
  return (
    <div className="absolute h-[56.624px] left-[307.6px] top-[-0.7px] w-[291.207px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[14.17px] not-italic text-[#4a5565] text-[18.298px] top-[21.28px] whitespace-nowrap">Sale</p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute bg-[#ffedd4] h-[33.546px] left-[15.25px] rounded-[12.198px] top-[16px] w-[86.318px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[13.723px] py-[4.575px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] not-italic relative shrink-0 text-[#ca3500] text-[18.298px] whitespace-nowrap">+250K</p>
      </div>
      <div aria-hidden className="absolute border-[1.525px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[12.198px]" />
    </div>
  );
}

function TransactionRow17() {
  return (
    <div className="absolute h-[65.566px] left-[548.76px] top-0 w-[252.021px]" data-name="TransactionRow">
      <Badge10 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute h-[65.566px] left-0 top-[327.21px] w-[722.756px]" data-name="Table Row">
      <TransactionRow15 />
      <TransactionRow16 />
      <TransactionRow17 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[326.308px] left-[-2.52px] top-[57.54px] w-[722.756px]" data-name="Table Body">
      <TableRow1 />
      <TableRow2 />
      <TableRow3 />
      <TableRow4 />
      <TableRow5 />
      <TableRow6 />
    </div>
  );
}

function Table() {
  return (
    <div className="h-[381.2px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function App10() {
  return (
    <div className="absolute bg-white h-[471.863px] left-[38.92px] rounded-[15.248px] top-[109.02px] w-[725.32px]" data-name="App">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.525px] relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden className="absolute border-[#ffedd4] border-[1.525px] border-solid inset-0 pointer-events-none rounded-[15.248px] shadow-[0px_1.525px_4.574px_0px_rgba(0,0,0,0.1),0px_1.525px_3.05px_-1.525px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon27() {
  return (
    <div className="absolute left-[18.3px] size-[18.298px] top-[12.2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.2976" preserveAspectRatio="none" viewBox="0 0 18.2976 18.2976" width="18.2976">
        <g id="Icon">
          <path d={svgPaths.p103f5800} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5248" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[42.694px] opacity-30 relative rounded-[15.248px] shrink-0 w-[99.517px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon27 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[42.69px] not-italic text-[#4a5565] text-[18.298px] top-[9.14px] whitespace-nowrap">Prev</p>
      </div>
    </div>
  );
}

function Badge11() {
  return (
    <div className="h-[33.546px] relative rounded-[12.198px] shrink-0 w-[53.582px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[13.723px] py-[4.575px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] not-italic relative shrink-0 text-[#0a0a0a] text-[18.298px] whitespace-nowrap">1/5</p>
      </div>
      <div aria-hidden className="absolute border-[1.525px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12.198px]" />
    </div>
  );
}

function Icon28() {
  return (
    <div className="absolute left-[64.33px] size-[18.298px] top-[12.2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.2976" preserveAspectRatio="none" viewBox="0 0 18.2976 18.2976" width="18.2976">
        <g id="Icon">
          <path d={svgPaths.p22d32200} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5248" />
        </g>
      </svg>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[42.694px] relative rounded-[15.248px] shrink-0 w-[100.923px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[18.3px] not-italic text-[#4a5565] text-[18.298px] top-[9.14px] whitespace-nowrap">Next</p>
        <Icon28 />
      </div>
    </div>
  );
}

function App11() {
  return (
    <div className="absolute content-stretch flex h-[42.694px] items-center justify-between left-[37.66px] top-[620.09px] w-[725.806px]" data-name="App">
      <Button8 />
      <Badge11 />
      <Button9 />
    </div>
  );
}

function Card7() {
  return (
    <div className="border-[#ffd6a7] border-[1.525px] border-solid drop-shadow-[0px_15.248px_11.436px_rgba(0,0,0,0.1)] h-[702.284px] relative rounded-[21.347px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(138.8460295654886deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card">
      <CardTitle7 />
      <Button7 />
      <App10 />
      <App11 />
    </div>
  );
}

function Icon29() {
  return (
    <div className="absolute left-0 size-[27.373px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="27.3729" preserveAspectRatio="none" viewBox="0 0 27.3729 27.3729" width="27.3729">
        <g id="Icon">
          <path d={svgPaths.p1b513400} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.28108" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle8() {
  return (
    <div className="absolute h-[27.373px] left-[32.85px] top-[32.86px] w-[260.235px]" data-name="CardTitle">
      <Icon29 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[21.898px] left-[38.32px] not-italic text-[21.898px] text-white top-[2.73px] tracking-[-0.4277px] whitespace-nowrap">Últimos Posts Del Wall</p>
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex h-[26.622px] items-center justify-center left-[590.53px] overflow-clip px-[10.949px] py-[2.737px] rounded-[10.949px] top-[36.31px] w-[79.867px]" data-name="Badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[21.898px] not-italic relative shrink-0 text-[14.013px] text-white whitespace-nowrap">Live</p>
    </div>
  );
}

function Button10() {
  return (
    <div className="absolute content-stretch flex h-[21.898px] items-start left-[689.11px] top-[38.66px] w-[80.729px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[21.898px] not-italic relative shrink-0 text-[16.424px] text-white whitespace-nowrap">View All →</p>
    </div>
  );
}

function App13() {
  return (
    <div className="h-[43.797px] relative shrink-0 w-[32.848px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[43.797px] left-0 not-italic text-[32.848px] text-white top-0 tracking-[0.0962px] whitespace-nowrap">🎉</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[32.848px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[32.848px] left-0 not-italic text-[21.898px] text-white top-0 tracking-[-0.4277px] whitespace-nowrap">Juan acaba de canjear unos audífonos</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[21.898px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[21.898px] min-w-px not-italic relative text-[#ffedd4] text-[16.424px]">Hace 5 minutos</p>
    </div>
  );
}

function App14() {
  return (
    <div className="flex-[1_0_0] h-[60.22px] min-w-px relative" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.475px] items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="bg-[rgba(255,255,255,0.23)] h-[104.017px] relative rounded-[19.161px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16.424px] items-center px-[21.898px] relative size-full">
          <App13 />
          <App14 />
        </div>
      </div>
    </div>
  );
}

function App15() {
  return (
    <div className="h-[43.797px] relative shrink-0 w-[32.848px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[43.797px] left-0 not-italic text-[32.848px] text-white top-0 tracking-[0.0962px] whitespace-nowrap">⭐</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[32.848px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[32.848px] left-0 not-italic text-[21.898px] text-white top-0 tracking-[-0.4277px] whitespace-nowrap">Ana subió al puesto #2 en el ranking</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[21.898px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[21.898px] min-w-px not-italic relative text-[#ffedd4] text-[16.424px]">Hace 12 minutos</p>
    </div>
  );
}

function App16() {
  return (
    <div className="flex-[1_0_0] h-[60.22px] min-w-px relative" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[5.475px] items-start relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-[rgba(255,255,255,0.23)] h-[104.017px] relative rounded-[19.161px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[16.424px] items-center px-[21.898px] relative size-full">
          <App15 />
          <App16 />
        </div>
      </div>
    </div>
  );
}

function App12() {
  return (
    <div className="content-stretch flex flex-col gap-[16.424px] h-[224.458px] items-start relative shrink-0 w-full" data-name="App">
      <Container5 />
      <Container6 />
    </div>
  );
}

function App17() {
  return (
    <div className="bg-white h-[60.22px] relative rounded-[19.161px] shrink-0 w-full" data-name="App">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[32.848px] left-[32.85px] not-italic text-[#f54900] text-[21.898px] top-[13.69px] tracking-[-0.4277px] whitespace-nowrap">Ver más del Wall</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[21.898px] h-[338.831px] items-start left-0 px-[32.848px] top-[101.65px] w-[803.515px]" data-name="CardContent">
      <App12 />
      <App17 />
    </div>
  );
}

function Card8() {
  return (
    <div className="bg-gradient-to-r from-[#ff6900] h-[464.683px] overflow-clip relative rounded-[19.161px] shadow-[0px_13.686px_20.53px_-4.106px_rgba(0,0,0,0.1),0px_5.475px_8.212px_-5.475px_rgba(0,0,0,0.1)] shrink-0 to-[#ca3500] via-1/2 via-[#f54900] w-full" data-name="Card">
      <CardTitle8 />
      <Badge12 />
      <Button10 />
      <CardContent />
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-0 size-[30.496px] top-[3.05px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="30.496" preserveAspectRatio="none" viewBox="0 0 30.496 30.496" width="30.496">
        <g id="Icon">
          <path d={svgPaths.pff25a80} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.54134" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle9() {
  return (
    <div className="absolute h-[36.595px] left-[37.66px] top-[36.67px] w-[267.817px]" data-name="CardTitle">
      <Icon30 />
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[42.69px] not-italic text-[#0a0a0a] text-[24.397px] top-0 tracking-[-0.4765px] whitespace-nowrap">
        <p className="leading-[36.595px] mb-0">Select an accumulation period to view budget calculations</p>
        <p className="leading-[36.595px]">​</p>
      </div>
    </div>
  );
}

function Button11() {
  return <div className="absolute h-[24.397px] left-[673.53px] top-[37.38px] w-[89.939px]" data-name="Button" />;
}

function HeaderCell3() {
  return (
    <div className="absolute content-stretch flex h-[54.833px] items-start left-[21.09px] p-[15.248px] top-[6.33px] w-[75.923px]" data-name="Header Cell">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24.397px] not-italic relative shrink-0 text-[18.298px] text-white whitespace-nowrap">Variable Name</p>
    </div>
  );
}

function HeaderCell4() {
  return (
    <div className="absolute content-stretch flex h-[54.833px] items-start left-[326.89px] p-[15.248px] top-[6.33px] w-[75.923px]" data-name="Header Cell">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24.397px] not-italic relative shrink-0 text-[18.298px] text-white whitespace-nowrap">Target</p>
    </div>
  );
}

function HeaderCell5() {
  return (
    <div className="absolute content-stretch flex h-[54.833px] items-start left-[453.43px] p-[15.248px] top-[6.33px] w-[75.923px]" data-name="Header Cell">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24.397px] not-italic relative shrink-0 text-[18.298px] text-white whitespace-nowrap">Results</p>
    </div>
  );
}

function HeaderCell6() {
  return (
    <div className="absolute content-stretch flex h-[54.833px] items-start left-[594.73px] p-[15.248px] top-[6.33px] w-[75.923px]" data-name="Header Cell">
      <p className="[word-break:break-word] font-['Inter:Bold',sans-serif] font-bold leading-[24.397px] not-italic relative shrink-0 text-[18.298px] text-white whitespace-nowrap">Acheivement</p>
    </div>
  );
}

function HeaderCell7() {
  return (
    <div className="absolute content-stretch flex h-[54.833px] items-start left-[200.35px] p-[15.248px] top-[6.33px] w-[105.448px]" data-name="Header Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[24.397px] min-w-px not-italic relative text-[18.298px] text-white">Period</p>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[61.16px] left-[-3.6px] to-[#f54900] top-[-7.17px] w-[736.028px]" data-name="Table Row">
      <HeaderCell3 />
      <HeaderCell4 />
      <HeaderCell5 />
      <HeaderCell6 />
      <HeaderCell7 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[54.893px] left-[-2.52px] top-[2.65px] w-[722.756px]" data-name="Table Header">
      <TableRow7 />
    </div>
  );
}

function TransactionRow18() {
  return (
    <div className="absolute h-[64.804px] left-[18.98px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow19() {
  return (
    <div className="absolute h-[64.804px] left-[305.8px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[39.62px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow20() {
  return (
    <div className="absolute h-[64.804px] left-[444.99px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[31.19px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function Frame3() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame2() {
  return (
    <div className="absolute h-[6.327px] left-[-44.25px] top-[26.28px] w-[179.262px]">
      <Frame3 />
    </div>
  );
}

function TransactionRow21() {
  return (
    <div className="absolute h-[67.487px] left-[645.34px] top-0 w-[90.685px]" data-name="TransactionRow">
      <Frame2 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow22() {
  return (
    <div className="absolute h-[64.804px] left-[188.42px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[19.82px] whitespace-nowrap">Purchase</p>
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[64.804px] left-0 top-0 w-[722.756px]" data-name="Table Row">
      <TransactionRow18 />
      <TransactionRow19 />
      <TransactionRow20 />
      <TransactionRow21 />
      <TransactionRow22 />
    </div>
  );
}

function TransactionRow23() {
  return (
    <div className="absolute h-[64.804px] left-[18.98px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow24() {
  return (
    <div className="absolute h-[64.804px] left-[305.8px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[39.62px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow25() {
  return (
    <div className="absolute h-[64.804px] left-[444.99px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[31.19px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function Frame5() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute h-[6.327px] left-[-44.25px] top-[26.28px] w-[179.262px]">
      <Frame5 />
    </div>
  );
}

function TransactionRow26() {
  return (
    <div className="absolute h-[67.487px] left-[645.34px] top-0 w-[90.685px]" data-name="TransactionRow">
      <Frame4 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow27() {
  return (
    <div className="absolute h-[64.804px] left-[188.42px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[19.82px] whitespace-nowrap">Purchase</p>
    </div>
  );
}

function TableRow9() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[64.804px] left-0 top-[196.84px] w-[722.756px]" data-name="Table Row">
      <TransactionRow23 />
      <TransactionRow24 />
      <TransactionRow25 />
      <TransactionRow26 />
      <TransactionRow27 />
    </div>
  );
}

function TransactionRow28() {
  return (
    <div className="absolute h-[64.804px] left-[18.98px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow29() {
  return (
    <div className="absolute h-[64.804px] left-[305.8px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[39.62px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow30() {
  return (
    <div className="absolute h-[64.804px] left-[444.99px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[31.19px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame6() {
  return (
    <div className="absolute h-[6.327px] left-[-44.25px] top-[26.28px] w-[179.262px]">
      <Frame9 />
    </div>
  );
}

function TransactionRow31() {
  return (
    <div className="absolute h-[67.487px] left-[645.34px] top-0 w-[90.685px]" data-name="TransactionRow">
      <Frame6 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow32() {
  return (
    <div className="absolute h-[64.804px] left-[188.42px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[19.82px] whitespace-nowrap">Purchase</p>
    </div>
  );
}

function TableRow10() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[64.804px] left-0 top-[64.81px] w-[722.756px]" data-name="Table Row">
      <TransactionRow28 />
      <TransactionRow29 />
      <TransactionRow30 />
      <TransactionRow31 />
      <TransactionRow32 />
    </div>
  );
}

function TransactionRow33() {
  return (
    <div className="absolute h-[64.804px] left-[18.98px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow34() {
  return (
    <div className="absolute h-[64.804px] left-[305.8px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[39.62px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow35() {
  return (
    <div className="absolute h-[64.804px] left-[444.99px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[31.19px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function Frame14() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[6.327px] left-[-44.25px] top-[26.28px] w-[179.262px]">
      <Frame14 />
    </div>
  );
}

function TransactionRow36() {
  return (
    <div className="absolute h-[67.487px] left-[645.34px] top-0 w-[90.685px]" data-name="TransactionRow">
      <Frame10 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow37() {
  return (
    <div className="absolute h-[64.804px] left-[188.42px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[19.82px] whitespace-nowrap">Purchase</p>
    </div>
  );
}

function TableRow11() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[64.804px] left-0 top-[261.64px] w-[722.756px]" data-name="Table Row">
      <TransactionRow33 />
      <TransactionRow34 />
      <TransactionRow35 />
      <TransactionRow36 />
      <TransactionRow37 />
    </div>
  );
}

function TransactionRow38() {
  return (
    <div className="absolute h-[64.804px] left-[18.98px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow39() {
  return (
    <div className="absolute h-[64.804px] left-[305.8px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[39.62px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow40() {
  return (
    <div className="absolute h-[64.804px] left-[444.99px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[31.19px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function Frame18() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame15() {
  return (
    <div className="absolute h-[6.327px] left-[-44.25px] top-[26.28px] w-[179.262px]">
      <Frame18 />
    </div>
  );
}

function TransactionRow41() {
  return (
    <div className="absolute h-[67.487px] left-[645.34px] top-0 w-[90.685px]" data-name="TransactionRow">
      <Frame15 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow42() {
  return (
    <div className="absolute h-[64.804px] left-[188.42px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[19.82px] whitespace-nowrap">Purchase</p>
    </div>
  );
}

function TableRow12() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[64.804px] left-[0.62px] top-[129.85px] w-[722.756px]" data-name="Table Row">
      <TransactionRow38 />
      <TransactionRow39 />
      <TransactionRow40 />
      <TransactionRow41 />
      <TransactionRow42 />
    </div>
  );
}

function TransactionRow43() {
  return (
    <div className="absolute h-[64.804px] left-[18.98px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[20.64px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow44() {
  return (
    <div className="absolute h-[64.804px] left-[305.8px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[39.62px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow45() {
  return (
    <div className="absolute h-[64.804px] left-[444.99px] top-0 w-[177.878px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] left-[31.19px] not-italic text-[#364153] text-[15.612px] top-[19.82px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function Frame29() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame28() {
  return (
    <div className="absolute h-[6.327px] left-[-44.25px] top-[26.28px] w-[179.262px]">
      <Frame29 />
    </div>
  );
}

function TransactionRow46() {
  return (
    <div className="absolute h-[67.487px] left-[645.34px] top-0 w-[90.685px]" data-name="TransactionRow">
      <Frame28 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow47() {
  return (
    <div className="absolute h-[64.804px] left-[188.42px] top-0 w-[292.857px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[15.25px] not-italic text-[#4a5565] text-[18.298px] top-[19.82px] whitespace-nowrap">Purchase</p>
    </div>
  );
}

function TableRow13() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.525px] border-solid h-[64.804px] left-0 top-[327.21px] w-[722.756px]" data-name="Table Row">
      <TransactionRow43 />
      <TransactionRow44 />
      <TransactionRow45 />
      <TransactionRow46 />
      <TransactionRow47 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[326.308px] left-[-2.52px] top-[57.54px] w-[722.756px]" data-name="Table Body">
      <TableRow8 />
      <TableRow9 />
      <TableRow10 />
      <TableRow11 />
      <TableRow12 />
      <TableRow13 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[381.2px] relative shrink-0 w-full" data-name="Table">
      <TableHeader1 />
      <TableBody1 />
    </div>
  );
}

function App18() {
  return (
    <div className="absolute bg-white h-[471.863px] left-[38.92px] rounded-[15.248px] top-[109.02px] w-[725.32px]" data-name="App">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.525px] relative rounded-[inherit] size-full">
        <Table1 />
      </div>
      <div aria-hidden className="absolute border-[#ffedd4] border-[1.525px] border-solid inset-0 pointer-events-none rounded-[15.248px] shadow-[0px_1.525px_4.574px_0px_rgba(0,0,0,0.1),0px_1.525px_3.05px_-1.525px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon31() {
  return (
    <div className="absolute left-[18.3px] size-[18.298px] top-[12.2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.2976" preserveAspectRatio="none" viewBox="0 0 18.2976 18.2976" width="18.2976">
        <g id="Icon">
          <path d={svgPaths.pbba2900} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5248" />
        </g>
      </svg>
    </div>
  );
}

function Button12() {
  return (
    <div className="h-[42.694px] opacity-30 relative rounded-[15.248px] shrink-0 w-[99.517px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon31 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[42.69px] not-italic text-[#4a5565] text-[18.298px] top-[9.14px] whitespace-nowrap">Prev</p>
      </div>
    </div>
  );
}

function Badge13() {
  return (
    <div className="h-[33.546px] relative rounded-[12.198px] shrink-0 w-[53.582px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[13.723px] py-[4.575px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[24.397px] not-italic relative shrink-0 text-[#0a0a0a] text-[18.298px] whitespace-nowrap">1/5</p>
      </div>
      <div aria-hidden className="absolute border-[1.525px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[12.198px]" />
    </div>
  );
}

function Icon32() {
  return (
    <div className="absolute left-[64.33px] size-[18.298px] top-[12.2px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="18.2976" preserveAspectRatio="none" viewBox="0 0 18.2976 18.2976" width="18.2976">
        <g id="Icon">
          <path d={svgPaths.p24c48f00} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5248" />
        </g>
      </svg>
    </div>
  );
}

function Button13() {
  return (
    <div className="h-[42.694px] relative rounded-[15.248px] shrink-0 w-[100.923px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[24.397px] left-[18.3px] not-italic text-[#4a5565] text-[18.298px] top-[9.14px] whitespace-nowrap">Next</p>
        <Icon32 />
      </div>
    </div>
  );
}

function App19() {
  return (
    <div className="absolute content-stretch flex h-[42.694px] items-center justify-between left-[37.66px] top-[620.09px] w-[725.806px]" data-name="App">
      <Button12 />
      <Badge13 />
      <Button13 />
    </div>
  );
}

function Frame30() {
  return (
    <div className="absolute h-[10.976px] left-[173.52px] top-[570px] w-[482.952px]">
      <div className="absolute bg-[#d9d9d9] h-[10.976px] left-0 rounded-[278.063px] top-0 w-[482.952px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[10.976px] left-0 rounded-[73.175px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[334.774px]" />
    </div>
  );
}

function Card9() {
  return (
    <div className="border-[#ffd6a7] border-[1.525px] border-solid drop-shadow-[0px_15.248px_11.436px_rgba(0,0,0,0.1)] h-[702.284px] relative rounded-[21.347px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(138.8460295654886deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card">
      <CardTitle9 />
      <Button11 />
      <App18 />
      <App19 />
      <Frame30 />
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.634px] items-start left-[23.2px] top-[276.27px] w-[803.515px]">
      <Frame21 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
    </div>
  );
}

export default function PhoneRespomsive() {
  return (
    <div className="bg-white relative size-full" data-name="Phone Respomsive">
      <Frame17 />
      <Frame27 />
    </div>
  );
}