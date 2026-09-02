import svgPaths from "./svg-opovdd5lqn";
import imgImage150 from "./18114d8a928ed9836f194b82b9aa3da76f2f297d.png";

function Heading() {
  return (
    <div className="h-[47.705px] relative shrink-0 w-full" data-name="Heading 1">
      <p className="[word-break:break-word] absolute bg-clip-text font-['Inter:Regular',sans-serif] font-normal leading-[47.705px] left-0 not-italic text-[42.935px] text-[transparent] top-0 tracking-[0.4402px] whitespace-nowrap" style={{ backgroundImage: "linear-gradient(90deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%), linear-gradient(90deg, rgb(16, 24, 40) 0%, rgb(245, 73, 0) 100%)" }}>
        Welcome Back, User! 👋
      </p>
    </div>
  );
}

function Icon() {
  return (
    <div className="absolute left-0 size-[19.082px] top-[4.77px]" data-name="Icon">
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
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-[28.62px] not-italic text-[#4a5565] text-[19.082px] top-0 tracking-[-0.3727px] whitespace-nowrap">{`Here's what's happening with your performance today`}</p>
    </div>
  );
}

function App1() {
  return (
    <div className="content-stretch flex flex-col gap-[9.541px] h-[85.869px] items-start relative shrink-0 w-full" data-name="App">
      <Heading />
      <Paragraph />
    </div>
  );
}

function Icon1() {
  return (
    <div className="absolute left-0 size-[19.082px] top-[4.77px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.082" preserveAspectRatio="none" viewBox="0 0 19.082 19.082" width="19.082">
        <g id="Icon">
          <path d={svgPaths.p196e5980} id="Vector" stroke="#FFEDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
          <path d={svgPaths.p3ee6ae00} id="Vector_2" stroke="#FFEDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
        </g>
      </svg>
    </div>
  );
}

function CardDescription() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardDescription">
      <Icon1 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-[28.62px] not-italic text-[#ffedd4] text-[19.082px] top-0 tracking-[-0.3727px] whitespace-nowrap">In</p>
    </div>
  );
}

function CardTitle() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="CardTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[47.705px] left-0 not-italic text-[42.935px] text-white top-0 tracking-[0.4402px] whitespace-nowrap">120</p>
    </div>
  );
}

function CardHeader() {
  return (
    <div className="absolute gap-x-[7.15576171875px] gap-y-[7.15576171875px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__28.62px_minmax(0,1fr)] h-[126.418px] left-0 pb-[14.312px] pt-[28.623px] px-[28.623px] top-0 w-[627.322px]" data-name="CardHeader">
      <CardDescription />
      <CardTitle />
    </div>
  );
}

function Icon2() {
  return (
    <div className="absolute left-[9.54px] size-[14.312px] top-[4.77px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g id="Icon">
          <path d={svgPaths.p34c81500} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
          <path d={svgPaths.p37dc5ca6} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
      </svg>
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[23.853px] relative rounded-[9.541px] shrink-0 w-[81.62px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon2 />
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] left-[33.39px] not-italic text-[14.312px] text-white top-[2.39px] whitespace-nowrap">+12%</p>
      </div>
    </div>
  );
}

function Text() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-[102.79px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[#ffedd4] text-[16.697px] top-0 tracking-[-0.1794px] whitespace-nowrap">vs last month</p>
      </div>
    </div>
  );
}

function App3() {
  return (
    <div className="absolute content-stretch flex gap-[9.541px] h-[23.853px] items-center left-[28.62px] top-[155.04px] w-[570.076px]" data-name="App">
      <Badge />
      <Text />
    </div>
  );
}

function App4() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[172.21px] rounded-[40017884px] size-[152.656px] top-[-74.94px]" data-name="App" />;
}

function Card() {
  return (
    <div className="h-[206.678px] overflow-clip relative rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] shrink-0 w-[407.03px]" style={{ backgroundImage: "linear-gradient(153.07981492297648deg, rgb(245, 73, 0) 0%, rgb(248, 81, 1) 100%)" }} data-name="Card">
      <CardHeader />
      <App3 />
      <App4 />
    </div>
  );
}

function Icon3() {
  return (
    <div className="absolute left-0 size-[19.082px] top-[4.77px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.082" preserveAspectRatio="none" viewBox="0 0 19.082 19.082" width="19.082">
        <g id="Icon">
          <path d={svgPaths.p2e0cdc80} id="Vector" stroke="#FFEDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
          <path d={svgPaths.p34bd9b80} id="Vector_2" stroke="#FFEDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
        </g>
      </svg>
    </div>
  );
}

function CardDescription1() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardDescription">
      <Icon3 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-[28.62px] not-italic text-[#ffedd4] text-[19.082px] top-0 tracking-[-0.3727px] whitespace-nowrap">Out</p>
    </div>
  );
}

function CardTitle1() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="CardTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[47.705px] left-0 not-italic text-[42.935px] text-white top-0 tracking-[0.4402px] whitespace-nowrap">650</p>
    </div>
  );
}

function CardHeader1() {
  return (
    <div className="absolute gap-x-[7.15576171875px] gap-y-[7.15576171875px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__28.62px_minmax(0,1fr)] h-[126.418px] left-0 pb-[14.312px] pt-[28.623px] px-[28.623px] top-0 w-[627.322px]" data-name="CardHeader">
      <CardDescription1 />
      <CardTitle1 />
    </div>
  );
}

function Icon4() {
  return (
    <div className="absolute left-[9.54px] size-[14.312px] top-[4.77px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g id="Icon">
          <path d={svgPaths.p3b5f1100} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
          <path d={svgPaths.p1c60b0c0} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
      </svg>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[23.853px] relative rounded-[9.541px] shrink-0 w-[72.937px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon4 />
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] left-[33.39px] not-italic text-[14.312px] text-white top-[2.39px] whitespace-nowrap">-8%</p>
      </div>
    </div>
  );
}

function Text1() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-[102.79px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[#ffedd4] text-[16.697px] top-0 tracking-[-0.1794px] whitespace-nowrap">vs last month</p>
      </div>
    </div>
  );
}

function App5() {
  return (
    <div className="absolute content-stretch flex gap-[9.541px] h-[23.853px] items-center left-[28.62px] top-[155.04px] w-[570.076px]" data-name="App">
      <Badge1 />
      <Text1 />
    </div>
  );
}

function App6() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[214.39px] rounded-[40017884px] size-[152.656px] top-[-74.94px]" data-name="App" />;
}

function Card1() {
  return (
    <div className="h-[206.678px] overflow-clip relative rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] shrink-0 w-[419.683px]" style={{ backgroundImage: "linear-gradient(153.78149265317558deg, rgb(255, 137, 4) 0%, rgb(255, 105, 0) 100%)" }} data-name="Card">
      <CardHeader1 />
      <App5 />
      <App6 />
    </div>
  );
}

function Icon5() {
  return (
    <div className="absolute left-0 size-[19.082px] top-[4.77px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="19.082" preserveAspectRatio="none" viewBox="0 0 19.082 19.082" width="19.082">
        <g id="Icon">
          <path d="M9.53955 1.58008V17.4818" id="Vector" stroke="#FFEDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
          <path d={svgPaths.p1ffb3900} id="Vector_2" stroke="#FFEDD4" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
        </g>
      </svg>
    </div>
  );
}

function CardDescription2() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardDescription">
      <Icon5 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-[28.62px] not-italic text-[#ffedd4] text-[19.082px] top-0 tracking-[-0.3727px] whitespace-nowrap">Available Balance</p>
    </div>
  );
}

function CardTitle2() {
  return (
    <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="CardTitle">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[47.705px] left-[0.18px] not-italic text-[42.935px] text-white top-[-0.16px] tracking-[0.4402px] whitespace-nowrap">1,683 Pts</p>
    </div>
  );
}

function CardHeader2() {
  return (
    <div className="absolute gap-x-[7.15576171875px] gap-y-[7.15576171875px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__28.62px_minmax(0,1fr)] h-[126.418px] left-0 pb-[14.312px] pt-[28.623px] px-[28.623px] top-0 w-[627.322px]" data-name="CardHeader">
      <CardDescription2 />
      <CardTitle2 />
    </div>
  );
}

function Icon6() {
  return (
    <div className="absolute left-[9.54px] size-[14.312px] top-[4.77px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g id="Icon">
          <path d={svgPaths.p34c81500} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
          <path d={svgPaths.p37dc5ca6} id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
      </svg>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[rgba(255,255,255,0.2)] h-[23.853px] relative rounded-[9.541px] shrink-0 w-[81.62px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid overflow-clip relative rounded-[inherit] size-full">
        <Icon6 />
        <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] left-[33.39px] not-italic text-[14.312px] text-white top-[2.39px] whitespace-nowrap">+12%</p>
      </div>
    </div>
  );
}

function Text2() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-[102.79px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[#ffedd4] text-[16.697px] top-0 tracking-[-0.1794px] whitespace-nowrap">vs last month</p>
      </div>
    </div>
  );
}

function App7() {
  return (
    <div className="absolute content-stretch flex gap-[9.541px] h-[23.853px] items-center left-[28.62px] top-[155.04px] w-[570.076px]" data-name="App">
      <Badge2 />
      <Text2 />
    </div>
  );
}

function App8() {
  return <div className="absolute bg-[rgba(255,255,255,0.1)] left-[252.35px] rounded-[40017884px] size-[152.656px] top-[-62.29px]" data-name="App" />;
}

function Card2() {
  return (
    <div className="h-[206.678px] overflow-clip relative rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] shrink-0 w-[409.139px]" style={{ backgroundImage: "linear-gradient(153.19916493019062deg, rgb(255, 105, 0) 0%, rgb(245, 73, 0) 100%)" }} data-name="Card">
      <CardHeader2 />
      <App7 />
      <App8 />
    </div>
  );
}

function Frame() {
  return (
    <div className="absolute content-stretch flex gap-[23.199px] items-center left-0 top-0">
      <Card />
      <Card1 />
      <Card2 />
    </div>
  );
}

function Icon7() {
  return (
    <div className="absolute left-0 size-[23.853px] top-0" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p29318680} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p1ac19d80} id="Vector_2" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle3() {
  return (
    <div className="col-1 justify-self-stretch relative row-1 self-stretch shrink-0" data-name="CardTitle">
      <Icon7 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[33.39px] not-italic text-[#0a0a0a] text-[19.082px] top-[2.39px] tracking-[-0.3727px] whitespace-nowrap">Achievements | Trophies</p>
    </div>
  );
}

function CardDescription3() {
  return <div className="col-1 justify-self-stretch relative row-2 self-stretch shrink-0" data-name="CardDescription" />;
}

function CardHeader3() {
  return (
    <div className="absolute gap-x-[7.15576171875px] gap-y-[7.15576171875px] grid grid-cols-[repeat(1,minmax(0,1fr))] grid-rows-[__23.85px_minmax(0,1fr)] h-[88.254px] left-[-1.2px] pt-[28.623px] px-[28.623px] top-[-1.2px] w-[1283.266px]" data-name="CardHeader">
      <CardTitle3 />
      <CardDescription3 />
    </div>
  );
}

function Icon8() {
  return (
    <div className="absolute left-[-10.54px] size-[40.07px] top-[6.33px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="40.0703" preserveAspectRatio="none" viewBox="0 0 40.0703 40.0703" width="40.0703">
        <g id="Icon">
          <path d={svgPaths.p2c92d080} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33919" />
          <path d={svgPaths.p10701a00} id="Vector_2" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3.33919" />
        </g>
      </svg>
    </div>
  );
}

function Frame15() {
  return (
    <div className="-translate-x-1/2 absolute h-[54.833px] left-[calc(50%-15.82px)] top-0 w-[122.32px]">
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#ff6900] leading-[53.252px] left-[30.25px] not-italic text-[39.939px] text-[transparent] to-[#ca3500] top-0 tracking-[0.3705px] via-1/2 via-[#f54900] whitespace-nowrap">Gold</p>
      <Icon8 />
    </div>
  );
}

function Frame13() {
  return (
    <div className="h-[54.833px] relative shrink-0 w-full">
      <Frame15 />
    </div>
  );
}

function Frame14() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex flex-col items-start left-[calc(50%-197.19px)] top-[89.49px] w-[170.826px]">
      <Frame13 />
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.97px] not-italic relative shrink-0 text-[#6a7282] text-[13.979px] text-center tracking-[-0.1502px] w-full">Elite Performance Award</p>
    </div>
  );
}

function Button() {
  return (
    <div className="absolute content-stretch flex h-[19.082px] items-start left-[526.91px] top-[27.19px] w-[70.346px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] not-italic relative shrink-0 text-[#f54900] text-[14.312px] whitespace-nowrap">View All →</p>
    </div>
  );
}

function Card3() {
  return (
    <div className="absolute border-[#ffd6a7] border-[1.202px] border-solid drop-shadow-[0px_11.926px_8.945px_rgba(0,0,0,0.1),0px_4.771px_3.578px_rgba(0,0,0,0.1)] h-[210.896px] left-[1303.34px] rounded-[16.697px] top-[-5.35px] w-[624.253px]" style={{ backgroundImage: "linear-gradient(161.33308603154313deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card">
      <CardHeader3 />
      <Frame14 />
      <Button />
    </div>
  );
}

function App2() {
  return (
    <div className="h-[915.937px] relative shrink-0 w-full" data-name="App">
      <Frame />
      <Card3 />
    </div>
  );
}

function Container() {
  return (
    <div className="content-stretch flex flex-col gap-[28.623px] h-[322.009px] items-start relative shrink-0 w-full" data-name="Container">
      <App1 />
      <App2 />
    </div>
  );
}

function Icon9() {
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

function CardTitle4() {
  return (
    <div className="absolute h-[23.853px] left-[28.62px] top-[28.63px] w-[226.767px]" data-name="CardTitle">
      <Icon9 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[33.39px] not-italic text-[19.082px] text-white top-[2.38px] tracking-[-0.3727px] whitespace-nowrap">Últimos Posts Del Wall</p>
    </div>
  );
}

function Badge3() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex h-[23.199px] items-center justify-center left-[1092.07px] overflow-clip px-[9.541px] py-[2.385px] rounded-[9.541px] top-[28.96px] w-[69.596px]" data-name="Badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[19.082px] not-italic relative shrink-0 text-[12.211px] text-white whitespace-nowrap">Live</p>
    </div>
  );
}

function Button1() {
  return (
    <div className="absolute content-stretch flex h-[19.082px] items-start left-[1177.97px] top-[31.01px] w-[70.346px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] not-italic relative shrink-0 text-[14.312px] text-white whitespace-nowrap">View All →</p>
    </div>
  );
}

function App10() {
  return (
    <div className="h-[38.164px] relative shrink-0 w-[28.623px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[38.164px] left-0 not-italic text-[28.623px] text-white top-0 tracking-[0.0839px] whitespace-nowrap">🎉</p>
      </div>
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[28.623px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[28.623px] left-0 not-italic text-[19.082px] text-white top-0 tracking-[-0.3727px] whitespace-nowrap">Juan acaba de canjear unos audífonos</p>
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="content-stretch flex h-[19.082px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] min-w-px not-italic relative text-[#ffedd4] text-[14.312px]">Hace 5 minutos</p>
    </div>
  );
}

function App11() {
  return (
    <div className="flex-[1_0_0] h-[52.476px] min-w-px relative" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.771px] items-start relative size-full">
        <Paragraph1 />
        <Paragraph2 />
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="bg-[rgba(255,255,255,0.23)] h-[90.64px] relative rounded-[16.697px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14.312px] items-center px-[19.082px] relative size-full">
          <App10 />
          <App11 />
        </div>
      </div>
    </div>
  );
}

function App12() {
  return (
    <div className="h-[38.164px] relative shrink-0 w-[28.623px]" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[38.164px] left-0 not-italic text-[28.623px] text-white top-0 tracking-[0.0839px] whitespace-nowrap">⭐</p>
      </div>
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[28.623px] relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[28.623px] left-0 not-italic text-[19.082px] text-white top-0 tracking-[-0.3727px] whitespace-nowrap">Ana subió al puesto #2 en el ranking</p>
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="content-stretch flex h-[19.082px] items-start relative shrink-0 w-full" data-name="Paragraph">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] min-w-px not-italic relative text-[#ffedd4] text-[14.312px]">Hace 12 minutos</p>
    </div>
  );
}

function App13() {
  return (
    <div className="flex-[1_0_0] h-[52.476px] min-w-px relative" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col gap-[4.771px] items-start relative size-full">
        <Paragraph3 />
        <Paragraph4 />
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="bg-[rgba(255,255,255,0.23)] h-[90.64px] relative rounded-[16.697px] shrink-0 w-full" data-name="Container">
      <div className="flex flex-row items-center size-full">
        <div className="content-stretch flex gap-[14.312px] items-center px-[19.082px] relative size-full">
          <App12 />
          <App13 />
        </div>
      </div>
    </div>
  );
}

function App9() {
  return (
    <div className="content-stretch flex flex-col gap-[14.312px] h-[195.591px] items-start relative shrink-0 w-full" data-name="App">
      <Container2 />
      <Container3 />
    </div>
  );
}

function App14() {
  return (
    <div className="bg-white h-[52.476px] relative rounded-[16.697px] shrink-0 w-full" data-name="App">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-[28.62px] not-italic text-[#f54900] text-[19.082px] top-[11.93px] tracking-[-0.3727px] whitespace-nowrap">Ver más del Wall</p>
    </div>
  );
}

function CardContent() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[19.082px] h-[295.771px] items-start left-0 px-[28.623px] top-[88.25px] w-[1283.266px]" data-name="CardContent">
      <App9 />
      <App14 />
    </div>
  );
}

function Card4() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[384.026px] left-[-0.72px] overflow-clip rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] to-[#ca3500] top-[-16.93px] via-1/2 via-[#f54900] w-[1283.266px]" data-name="Card">
      <CardTitle4 />
      <Badge3 />
      <Button1 />
      <CardContent />
    </div>
  );
}

function Icon10() {
  return (
    <div className="absolute left-[3.6px] size-[23.853px] top-[-3.21px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p10a5ac80} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d="M3.08301 5.98828H20.7677" id="Vector_2" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.paa34d00} id="Vector_3" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle5() {
  return (
    <div className="absolute h-[23.853px] left-[28.62px] top-[34.95px] w-[1226.021px]" data-name="CardTitle">
      <Icon10 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[36.99px] not-italic text-[#0a0a0a] text-[19.082px] top-[-0.83px] tracking-[-0.3727px] whitespace-nowrap">Products Catalog</p>
    </div>
  );
}

function PrimitiveButton() {
  return (
    <div className="bg-white col-1 justify-self-stretch relative rounded-[16.697px] row-1 self-stretch shrink-0" data-name="Primitive.button">
      <div aria-hidden className="absolute border-[#ff8d28] border-[1.193px] border-solid inset-0 pointer-events-none rounded-[16.697px]" />
      <div className="flex flex-row items-center justify-center size-full">
        <div className="content-stretch flex items-center justify-center px-[10.734px] py-[5.964px] relative size-full">
          <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[23.853px] not-italic relative shrink-0 text-[#0a0a0a] text-[16.697px] tracking-[-0.1794px] whitespace-nowrap">Product Gallery</p>
        </div>
      </div>
    </div>
  );
}

function Icon11() {
  return <div className="absolute left-[254.63px] size-[19.082px] top-[4.54px]" data-name="Icon" />;
}

function PrimitiveButton1() {
  return (
    <div className="col-2 h-[34.586px] justify-self-stretch relative rounded-[16.697px] row-1 shrink-0" data-name="Primitive.button">
      <div aria-hidden className="absolute border-[1.193px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[16.697px]" />
      <Icon11 />
      <div className="absolute inset-[46.78%_53.7%_11.84%_43.69%]" data-name="Vector">
        <div className="absolute inset-[-5.56%_-5%]">
          <svg className="block size-full" fill="none" height="15.9017" preserveAspectRatio="none" viewBox="0 0 17.4826 15.9017" width="17.4826">
            <path d={svgPaths.p28dcd200} id="Vector" stroke="#0A0A0A" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.59017" />
          </svg>
        </div>
      </div>
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[23.853px] left-[290.41px] not-italic text-[#0a0a0a] text-[16.697px] top-[10.59px] tracking-[-0.1794px] whitespace-nowrap">Favorites</p>
    </div>
  );
}

function TabList() {
  return (
    <div className="absolute bg-[#ececf0] grid grid-cols-[repeat(2,minmax(0,1fr))] grid-rows-[repeat(1,minmax(0,1fr))] h-[52.724px] left-[28.47px] px-[3.578px] py-[4.174px] rounded-[16.697px] top-[87.52px] w-[1225.307px]" data-name="Tab List">
      <PrimitiveButton />
      <PrimitiveButton1 />
    </div>
  );
}

function Icon12() {
  return (
    <div className="absolute left-[147.91px] size-[66.787px] top-[49.27px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="66.7871" preserveAspectRatio="none" viewBox="0 0 66.7871 66.7871" width="66.7871">
        <g id="Icon">
          <path d={svgPaths.p1f3d0480} id="Vector" stroke="url(#paint0_linear_0_92)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
          <path d="M8.63525 16.7891H58.1523" id="Vector_2" stroke="url(#paint1_linear_0_92)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
          <path d={svgPaths.p394a9980} id="Vector_3" stroke="url(#paint2_linear_0_92)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_92" x1="22.2632" x2="44.5256" y1="33.3937" y2="33.3937">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_92" x1="8.63525" x2="58.1523" y1="17.2891" y2="17.2891">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_92" x1="8.34912" x2="58.4395" y1="33.3963" y2="33.3963">
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
    <div className="absolute bg-white border-[1.193px] border-[rgba(0,0,0,0)] border-solid h-[26.238px] left-[13.14px] overflow-clip rounded-[9.541px] shadow-[0px_1.193px_3.578px_0px_rgba(0,0,0,0.1),0px_1.193px_2.385px_-1.193px_rgba(0,0,0,0.1)] top-[187.58px] w-[83.968px]" data-name="Badge">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] left-[9.54px] not-italic text-[#f54900] text-[14.312px] top-[2.38px] w-[63.209px]">2000 pts</p>
    </div>
  );
}

function ProductCard() {
  return (
    <div className="absolute h-[227.768px] left-[19.74px] overflow-clip right-[20.05px] rounded-[11.926px] top-[18.48px]" style={{ backgroundImage: "linear-gradient(147.26477248075892deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} data-name="ProductCard">
      <Icon12 />
      <Badge4 />
    </div>
  );
}

function Heading1() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-[3.6px] not-italic text-[#101828] text-[16.697px] top-[-3.2px] tracking-[-0.1794px] whitespace-nowrap">Product 01</p>
    </div>
  );
}

function Icon13() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_117)" id="Icon">
          <path d={svgPaths.p1485f00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_117">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon14() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_73)" id="Icon">
          <path d={svgPaths.pc649380} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_73">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon15() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_117)" id="Icon">
          <path d={svgPaths.p1485f00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_117">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon16() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_73)" id="Icon">
          <path d={svgPaths.pc649380} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_73">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon17() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_51)" id="Icon">
          <path d={svgPaths.pbac2500} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_51">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container5() {
  return (
    <div className="content-stretch flex gap-[4.771px] h-[14.312px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon13 />
      <Icon14 />
      <Icon15 />
      <Icon16 />
      <Icon17 />
    </div>
  );
}

function ProductCard1() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.771px] h-[42.935px] items-start left-[19.08px] right-[19.08px] top-[257.86px]" data-name="ProductCard">
      <Heading1 />
      <Container5 />
    </div>
  );
}

function ProductCard2() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[42.935px] left-[19.08px] right-[19.08px] rounded-[11.926px] to-[#f54900] top-[321.43px]" data-name="ProductCard">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-[182.02px] not-italic text-[16.697px] text-center text-white top-[6.34px] tracking-[-0.1794px] whitespace-nowrap">Redeem</p>
    </div>
  );
}

function Container4() {
  return (
    <div className="bg-white border-[#ffd6a7] border-[1.193px] border-solid drop-shadow-[0px_4.771px_3.578px_rgba(0,0,0,0.1)] h-[392.267px] relative rounded-[16.697px] shrink-0 w-[396.485px]" data-name="Container">
      <ProductCard />
      <ProductCard1 />
      <ProductCard2 />
    </div>
  );
}

function Icon18() {
  return (
    <div className="absolute left-[147.91px] size-[66.787px] top-[49.27px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="66.7871" preserveAspectRatio="none" viewBox="0 0 66.7871 66.7871" width="66.7871">
        <g id="Icon">
          <path d={svgPaths.p1a49c400} id="Vector" stroke="url(#paint0_linear_0_85)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
          <path d="M8.63574 16.7891H58.1528" id="Vector_2" stroke="url(#paint1_linear_0_85)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
          <path d={svgPaths.p820c100} id="Vector_3" stroke="url(#paint2_linear_0_85)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_85" x1="22.2637" x2="44.526" y1="33.3937" y2="33.3937">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_85" x1="8.63574" x2="58.1528" y1="17.2891" y2="17.2891">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_85" x1="8.34961" x2="58.4399" y1="33.3963" y2="33.3963">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Badge5() {
  return (
    <div className="absolute bg-white border-[1.193px] border-[rgba(0,0,0,0)] border-solid h-[26.238px] left-[13.14px] overflow-clip rounded-[9.541px] shadow-[0px_1.193px_3.578px_0px_rgba(0,0,0,0.1),0px_1.193px_2.385px_-1.193px_rgba(0,0,0,0.1)] top-[187.58px] w-[83.968px]" data-name="Badge">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] left-[9.54px] not-italic text-[#f54900] text-[14.312px] top-[2.38px] w-[63.209px]">2000 pts</p>
    </div>
  );
}

function ProductCard3() {
  return (
    <div className="absolute h-[227.768px] left-[19.74px] overflow-clip right-[20.05px] rounded-[11.926px] top-[18.48px]" style={{ backgroundImage: "linear-gradient(147.26477248075892deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} data-name="ProductCard">
      <Icon18 />
      <Badge5 />
    </div>
  );
}

function Heading2() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-[3.6px] not-italic text-[#101828] text-[16.697px] top-[-3.2px] tracking-[-0.1794px] whitespace-nowrap">Product 01</p>
    </div>
  );
}

function Icon19() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_73)" id="Icon">
          <path d={svgPaths.pc649380} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_73">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon20() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_71)" id="Icon">
          <path d={svgPaths.pa134a00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_71">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon21() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_73)" id="Icon">
          <path d={svgPaths.pc649380} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_73">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon22() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_71)" id="Icon">
          <path d={svgPaths.pa134a00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_71">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon23() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_69)" id="Icon">
          <path d={svgPaths.p1ce7c000} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_69">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container7() {
  return (
    <div className="content-stretch flex gap-[4.771px] h-[14.312px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon19 />
      <Icon20 />
      <Icon21 />
      <Icon22 />
      <Icon23 />
    </div>
  );
}

function ProductCard4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.771px] h-[42.935px] items-start left-[19.08px] right-[19.08px] top-[257.86px]" data-name="ProductCard">
      <Heading2 />
      <Container7 />
    </div>
  );
}

function ProductCard5() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[42.935px] left-[19.08px] right-[19.08px] rounded-[11.926px] to-[#f54900] top-[321.43px]" data-name="ProductCard">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-[182.02px] not-italic text-[16.697px] text-center text-white top-[6.34px] tracking-[-0.1794px] whitespace-nowrap">Redeem</p>
    </div>
  );
}

function Container6() {
  return (
    <div className="bg-white border-[#ffd6a7] border-[1.193px] border-solid drop-shadow-[0px_4.771px_3.578px_rgba(0,0,0,0.1)] h-[392.267px] relative rounded-[16.697px] shrink-0 w-[396.485px]" data-name="Container">
      <ProductCard3 />
      <ProductCard4 />
      <ProductCard5 />
    </div>
  );
}

function Icon24() {
  return (
    <div className="absolute left-[147.91px] size-[66.787px] top-[49.27px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="66.7871" preserveAspectRatio="none" viewBox="0 0 66.7871 66.7871" width="66.7871">
        <g id="Icon">
          <path d={svgPaths.p1a49c400} id="Vector" stroke="url(#paint0_linear_0_102)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
          <path d="M8.63574 16.7891H58.1528" id="Vector_2" stroke="url(#paint1_linear_0_102)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
          <path d={svgPaths.p394a9980} id="Vector_3" stroke="url(#paint2_linear_0_102)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_102" x1="22.2637" x2="44.526" y1="33.3937" y2="33.3937">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_102" x1="8.63574" x2="58.1528" y1="17.2891" y2="17.2891">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_102" x1="8.34912" x2="58.4395" y1="33.3963" y2="33.3963">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Badge6() {
  return (
    <div className="absolute bg-white border-[1.193px] border-[rgba(0,0,0,0)] border-solid h-[26.238px] left-[13.14px] overflow-clip rounded-[9.541px] shadow-[0px_1.193px_3.578px_0px_rgba(0,0,0,0.1),0px_1.193px_2.385px_-1.193px_rgba(0,0,0,0.1)] top-[187.58px] w-[83.968px]" data-name="Badge">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] left-[9.54px] not-italic text-[#f54900] text-[14.312px] top-[2.38px] w-[63.209px]">2000 pts</p>
    </div>
  );
}

function ProductCard6() {
  return (
    <div className="absolute h-[227.768px] left-[19.74px] overflow-clip right-[20.05px] rounded-[11.926px] top-[18.48px]" style={{ backgroundImage: "linear-gradient(147.26477248075892deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} data-name="ProductCard">
      <Icon24 />
      <Badge6 />
    </div>
  );
}

function Heading3() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-[3.6px] not-italic text-[#101828] text-[16.697px] top-[-3.2px] tracking-[-0.1794px] whitespace-nowrap">Product 01</p>
    </div>
  );
}

function Icon25() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_71)" id="Icon">
          <path d={svgPaths.pa134a00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_71">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon26() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_73)" id="Icon">
          <path d={svgPaths.pc649380} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_73">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon27() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_71)" id="Icon">
          <path d={svgPaths.pa134a00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_71">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon28() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_117)" id="Icon">
          <path d={svgPaths.p1485f00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_117">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon29() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_69)" id="Icon">
          <path d={svgPaths.p1ce7c000} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_69">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container9() {
  return (
    <div className="content-stretch flex gap-[4.771px] h-[14.312px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon25 />
      <Icon26 />
      <Icon27 />
      <Icon28 />
      <Icon29 />
    </div>
  );
}

function ProductCard7() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.771px] h-[42.935px] items-start left-[19.08px] right-[19.08px] top-[257.86px]" data-name="ProductCard">
      <Heading3 />
      <Container9 />
    </div>
  );
}

function ProductCard8() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[42.935px] left-[19.08px] right-[19.08px] rounded-[11.926px] to-[#f54900] top-[321.43px]" data-name="ProductCard">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-[182.02px] not-italic text-[16.697px] text-center text-white top-[6.34px] tracking-[-0.1794px] whitespace-nowrap">Redeem</p>
    </div>
  );
}

function Container8() {
  return (
    <div className="bg-white border-[#ffd6a7] border-[1.193px] border-solid drop-shadow-[0px_4.771px_3.578px_rgba(0,0,0,0.1)] h-[392.267px] relative rounded-[16.697px] shrink-0 w-[396.485px]" data-name="Container">
      <ProductCard6 />
      <ProductCard7 />
      <ProductCard8 />
    </div>
  );
}

function Icon30() {
  return (
    <div className="absolute left-[147.91px] size-[66.787px] top-[49.27px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="66.7871" preserveAspectRatio="none" viewBox="0 0 66.7871 66.7871" width="66.7871">
        <g id="Icon">
          <path d={svgPaths.p1f3d0480} id="Vector" stroke="url(#paint0_linear_0_60)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
          <path d="M8.63525 16.7891H58.1523" id="Vector_2" stroke="url(#paint1_linear_0_60)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
          <path d={svgPaths.p3174f200} id="Vector_3" stroke="url(#paint2_linear_0_60)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_60" x1="22.2632" x2="44.5256" y1="33.3937" y2="33.3937">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_60" x1="8.63525" x2="58.1523" y1="17.2891" y2="17.2891">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_60" x1="8.34888" x2="58.4392" y1="33.3963" y2="33.3963">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Badge7() {
  return (
    <div className="absolute bg-white border-[1.193px] border-[rgba(0,0,0,0)] border-solid h-[26.238px] left-[13.14px] overflow-clip rounded-[9.541px] shadow-[0px_1.193px_3.578px_0px_rgba(0,0,0,0.1),0px_1.193px_2.385px_-1.193px_rgba(0,0,0,0.1)] top-[187.58px] w-[83.968px]" data-name="Badge">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] left-[9.54px] not-italic text-[#f54900] text-[14.312px] top-[2.38px] w-[63.209px]">2000 pts</p>
    </div>
  );
}

function ProductCard9() {
  return (
    <div className="absolute h-[227.768px] left-[19.74px] overflow-clip right-[20.05px] rounded-[11.926px] top-[18.48px]" style={{ backgroundImage: "linear-gradient(147.26477248075892deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} data-name="ProductCard">
      <Icon30 />
      <Badge7 />
    </div>
  );
}

function Heading4() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-[3.6px] not-italic text-[#101828] text-[16.697px] top-[-3.2px] tracking-[-0.1794px] whitespace-nowrap">Product 01</p>
    </div>
  );
}

function Icon31() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_71)" id="Icon">
          <path d={svgPaths.pa134a00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_71">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon32() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_58)" id="Icon">
          <path d={svgPaths.p3ea49b00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_58">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon33() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_117)" id="Icon">
          <path d={svgPaths.p1485f00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_117">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon34() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_73)" id="Icon">
          <path d={svgPaths.pc649380} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_73">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon35() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_51)" id="Icon">
          <path d={svgPaths.pbac2500} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_51">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container11() {
  return (
    <div className="content-stretch flex gap-[4.771px] h-[14.312px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon31 />
      <Icon32 />
      <Icon33 />
      <Icon34 />
      <Icon35 />
    </div>
  );
}

function ProductCard10() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.771px] h-[42.935px] items-start left-[19.08px] right-[19.08px] top-[257.86px]" data-name="ProductCard">
      <Heading4 />
      <Container11 />
    </div>
  );
}

function ProductCard11() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[42.935px] left-[19.08px] right-[19.08px] rounded-[11.926px] to-[#f54900] top-[321.43px]" data-name="ProductCard">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-[182.02px] not-italic text-[16.697px] text-center text-white top-[6.34px] tracking-[-0.1794px] whitespace-nowrap">Redeem</p>
    </div>
  );
}

function Container10() {
  return (
    <div className="bg-white border-[#ffd6a7] border-[1.193px] border-solid drop-shadow-[0px_4.771px_3.578px_rgba(0,0,0,0.1)] h-[392.267px] relative rounded-[16.697px] shrink-0 w-[396.485px]" data-name="Container">
      <ProductCard9 />
      <ProductCard10 />
      <ProductCard11 />
    </div>
  );
}

function Icon36() {
  return (
    <div className="absolute left-[147.9px] size-[66.787px] top-[49.27px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="66.7871" preserveAspectRatio="none" viewBox="0 0 66.7871 66.7871" width="66.7871">
        <g id="Icon">
          <path d={svgPaths.p271abc00} id="Vector" stroke="url(#paint0_linear_0_47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
          <path d="M8.63599 16.7891H58.1531" id="Vector_2" stroke="url(#paint1_linear_0_47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
          <path d={svgPaths.p820c100} id="Vector_3" stroke="url(#paint2_linear_0_47)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="5.56559" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_47" x1="22.2639" x2="44.5263" y1="33.3937" y2="33.3937">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint1_linear_0_47" x1="8.63599" x2="58.1531" y1="17.2891" y2="17.2891">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint2_linear_0_47" x1="8.34961" x2="58.4399" y1="33.3963" y2="33.3963">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Badge8() {
  return (
    <div className="absolute bg-white border-[1.193px] border-[rgba(0,0,0,0)] border-solid h-[26.238px] left-[13.14px] overflow-clip rounded-[9.541px] shadow-[0px_1.193px_3.578px_0px_rgba(0,0,0,0.1),0px_1.193px_2.385px_-1.193px_rgba(0,0,0,0.1)] top-[187.58px] w-[83.968px]" data-name="Badge">
      <p className="[word-break:break-word] absolute font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] left-[9.54px] not-italic text-[#f54900] text-[14.312px] top-[2.38px] w-[63.209px]">2000 pts</p>
    </div>
  );
}

function ProductCard12() {
  return (
    <div className="absolute h-[227.768px] left-[19.74px] overflow-clip right-[20.05px] rounded-[11.926px] top-[18.48px]" style={{ backgroundImage: "linear-gradient(147.26477248075892deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} data-name="ProductCard">
      <Icon36 />
      <Badge8 />
    </div>
  );
}

function Heading5() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-full" data-name="Heading 4">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-[3.6px] not-italic text-[#101828] text-[16.697px] top-[-3.2px] tracking-[-0.1794px] whitespace-nowrap">Product 01</p>
    </div>
  );
}

function Icon37() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_73)" id="Icon">
          <path d={svgPaths.pc649380} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_73">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon38() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_71)" id="Icon">
          <path d={svgPaths.pa134a00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_71">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon39() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_53)" id="Icon">
          <path d={svgPaths.p20df4a00} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_53">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon40() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_45)" id="Icon">
          <path d={svgPaths.p16cf9400} fill="#F0B100" id="Vector" stroke="#F0B100" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_45">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Icon41() {
  return (
    <div className="relative shrink-0 size-[14.312px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g clipPath="url(#clip0_0_43)" id="Icon">
          <path d={svgPaths.p3f6b1180} id="Vector" stroke="#D1D5DC" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
        <defs>
          <clipPath id="clip0_0_43">
            <rect fill="white" height="14.3115" width="14.3115" />
          </clipPath>
        </defs>
      </svg>
    </div>
  );
}

function Container13() {
  return (
    <div className="content-stretch flex gap-[4.771px] h-[14.312px] items-center relative shrink-0 w-full" data-name="Container">
      <Icon37 />
      <Icon38 />
      <Icon39 />
      <Icon40 />
      <Icon41 />
    </div>
  );
}

function ProductCard13() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[4.771px] h-[42.935px] items-start left-[19.08px] right-[19.08px] top-[257.86px]" data-name="ProductCard">
      <Heading5 />
      <Container13 />
    </div>
  );
}

function ProductCard14() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[42.935px] left-[19.08px] right-[19.08px] rounded-[11.926px] to-[#f54900] top-[321.43px]" data-name="ProductCard">
      <p className="-translate-x-1/2 [word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-[182.02px] not-italic text-[16.697px] text-center text-white top-[6.34px] tracking-[-0.1794px] whitespace-nowrap">Redeem</p>
    </div>
  );
}

function Container12() {
  return (
    <div className="bg-white border-[#ffd6a7] border-[1.193px] border-solid drop-shadow-[0px_4.771px_3.578px_rgba(0,0,0,0.1)] h-[392.267px] relative rounded-[16.697px] shrink-0 w-[396.485px]" data-name="Container">
      <ProductCard12 />
      <ProductCard13 />
      <ProductCard14 />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute content-stretch flex gap-[18.981px] items-center left-[28.62px] top-[171.19px]">
      <Container4 />
      <Container6 />
      <Container8 />
      <Container10 />
      <Container12 />
    </div>
  );
}

function Button2() {
  return (
    <div className="absolute content-stretch flex h-[25.947px] items-start left-[1793.67px] top-[102.29px] w-[95.654px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[25.947px] not-italic relative shrink-0 text-[#f54900] text-[19.46px] whitespace-nowrap">View All →</p>
    </div>
  );
}

function Card5() {
  return (
    <div className="absolute bg-white border-[1.054px] border-[rgba(255,105,0,0.34)] border-solid h-[605.272px] left-[-0.72px] overflow-clip rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] top-[575.69px] w-[1931.809px]" data-name="Card">
      <CardTitle5 />
      <TabList />
      <Frame1 />
      <Button2 />
    </div>
  );
}

function Icon42() {
  return (
    <div className="absolute left-0 size-[23.853px] top-[2.38px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p2d69680} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle6() {
  return (
    <div className="absolute h-[28.623px] left-[29.46px] top-[28.69px] w-[209.474px]" data-name="CardTitle">
      <Icon42 />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-[33.39px] not-italic text-[#0a0a0a] text-[19.082px] top-0 tracking-[-0.3727px] whitespace-nowrap">Recent Transactions</p>
    </div>
  );
}

function Button3() {
  return (
    <div className="absolute content-stretch flex h-[19.082px] items-start left-[526.8px] top-[29.24px] w-[70.346px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] not-italic relative shrink-0 text-[#f54900] text-[14.312px] whitespace-nowrap">View All →</p>
    </div>
  );
}

function HeaderCell() {
  return (
    <div className="absolute content-stretch flex h-[42.935px] items-start left-0 p-[11.926px] top-0 w-[139.127px]" data-name="Header Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[19.082px] min-w-px not-italic relative text-[14.312px] text-white">Date</p>
    </div>
  );
}

function HeaderCell1() {
  return (
    <div className="absolute content-stretch flex h-[42.935px] items-start left-[139.13px] p-[11.926px] top-0 w-[229.059px]" data-name="Header Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[19.082px] min-w-px not-italic relative text-[14.312px] text-white">Details</p>
    </div>
  );
}

function HeaderCell2() {
  return (
    <div className="absolute content-stretch flex h-[42.935px] items-start left-[368.18px] p-[11.926px] top-0 w-[197.119px]" data-name="Header Cell">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Bold',sans-serif] font-bold leading-[19.082px] min-w-px not-italic relative text-[14.312px] text-white">Amount</p>
    </div>
  );
}

function TableRow() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[42.935px] left-0 to-[#f54900] top-0 w-[565.305px]" data-name="Table Row">
      <HeaderCell />
      <HeaderCell1 />
      <HeaderCell2 />
    </div>
  );
}

function TableHeader() {
  return (
    <div className="absolute h-[42.935px] left-[-1.97px] top-[2.08px] w-[565.305px]" data-name="Table Header">
      <TableRow />
    </div>
  );
}

function TransactionRow() {
  return (
    <div className="absolute h-[50.687px] left-0 top-0 w-[139.127px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[16.14px] not-italic text-[#364153] text-[12.211px] top-[15.51px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow1() {
  return (
    <div className="absolute h-[50.687px] left-[139.13px] top-0 w-[229.059px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[11.93px] not-italic text-[#4a5565] text-[14.312px] top-[15.51px] whitespace-nowrap">Purchase</p>
    </div>
  );
}

function Badge9() {
  return (
    <div className="absolute bg-[#ffedd4] h-[26.238px] left-[11.93px] rounded-[9.541px] top-[11.93px] w-[65.781px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[10.734px] py-[3.578px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] not-italic relative shrink-0 text-[#ca3500] text-[14.312px] whitespace-nowrap">+100K</p>
      </div>
      <div aria-hidden className="absolute border-[1.193px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9.541px]" />
    </div>
  );
}

function TransactionRow2() {
  return (
    <div className="absolute h-[50.687px] left-[368.18px] top-0 w-[197.119px]" data-name="TransactionRow">
      <Badge9 />
    </div>
  );
}

function TableRow1() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.193px] border-solid h-[50.687px] left-0 top-0 w-[565.305px]" data-name="Table Row">
      <TransactionRow />
      <TransactionRow1 />
      <TransactionRow2 />
    </div>
  );
}

function TransactionRow3() {
  return (
    <div className="absolute h-[50.687px] left-0 top-0 w-[139.127px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[16.14px] not-italic text-[#364153] text-[12.211px] top-[15.5px] whitespace-nowrap">01-01</p>
    </div>
  );
}

function TransactionRow4() {
  return (
    <div className="absolute h-[50.687px] left-[139.13px] top-0 w-[229.059px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[11.93px] not-italic text-[#4a5565] text-[14.312px] top-[15.5px] whitespace-nowrap">Purchase</p>
    </div>
  );
}

function Badge10() {
  return (
    <div className="absolute bg-[#ffedd4] h-[26.238px] left-[11.93px] rounded-[9.541px] top-[11.93px] w-[65.781px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[10.734px] py-[3.578px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] not-italic relative shrink-0 text-[#ca3500] text-[14.312px] whitespace-nowrap">+100K</p>
      </div>
      <div aria-hidden className="absolute border-[1.193px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9.541px]" />
    </div>
  );
}

function TransactionRow5() {
  return (
    <div className="absolute h-[50.687px] left-[368.18px] top-0 w-[197.119px]" data-name="TransactionRow">
      <Badge10 />
    </div>
  );
}

function TableRow2() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.193px] border-solid h-[50.687px] left-0 top-[153.96px] w-[565.305px]" data-name="Table Row">
      <TransactionRow3 />
      <TransactionRow4 />
      <TransactionRow5 />
    </div>
  );
}

function TransactionRow6() {
  return (
    <div className="absolute h-[51.283px] left-0 top-0 w-[139.127px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[16.14px] not-italic text-[#364153] text-[12.211px] top-[16.1px] whitespace-nowrap">02-01</p>
    </div>
  );
}

function TransactionRow7() {
  return (
    <div className="absolute h-[51.283px] left-[139.13px] top-0 w-[229.059px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[11.93px] not-italic text-[#4a5565] text-[14.312px] top-[16.1px] whitespace-nowrap">Refund</p>
    </div>
  );
}

function Badge11() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[26.238px] left-[11.93px] rounded-[9.541px] top-[12.52px] w-[56.053px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[10.734px] py-[3.578px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] not-italic relative shrink-0 text-[#364153] text-[14.312px] whitespace-nowrap">-20K</p>
      </div>
      <div aria-hidden className="absolute border-[1.193px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9.541px]" />
    </div>
  );
}

function TransactionRow8() {
  return (
    <div className="absolute h-[51.283px] left-[368.18px] top-0 w-[197.119px]" data-name="TransactionRow">
      <Badge11 />
    </div>
  );
}

function TableRow3() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.193px] border-solid h-[51.283px] left-0 top-[50.69px] w-[565.305px]" data-name="Table Row">
      <TransactionRow6 />
      <TransactionRow7 />
      <TransactionRow8 />
    </div>
  );
}

function TransactionRow9() {
  return (
    <div className="absolute h-[51.283px] left-0 top-0 w-[139.127px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[16.14px] not-italic text-[#364153] text-[12.211px] top-[16.1px] whitespace-nowrap">02-01</p>
    </div>
  );
}

function TransactionRow10() {
  return (
    <div className="absolute h-[51.283px] left-[139.13px] top-0 w-[229.059px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[11.93px] not-italic text-[#4a5565] text-[14.312px] top-[16.1px] whitespace-nowrap">Refund</p>
    </div>
  );
}

function Badge12() {
  return (
    <div className="absolute bg-[#f3f4f6] h-[26.238px] left-[11.93px] rounded-[9.541px] top-[12.52px] w-[56.053px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[10.734px] py-[3.578px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] not-italic relative shrink-0 text-[#364153] text-[14.312px] whitespace-nowrap">-20K</p>
      </div>
      <div aria-hidden className="absolute border-[1.193px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9.541px]" />
    </div>
  );
}

function TransactionRow11() {
  return (
    <div className="absolute h-[51.283px] left-[368.18px] top-0 w-[197.119px]" data-name="TransactionRow">
      <Badge12 />
    </div>
  );
}

function TableRow4() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.193px] border-solid h-[51.283px] left-0 top-[204.64px] w-[565.305px]" data-name="Table Row">
      <TransactionRow9 />
      <TransactionRow10 />
      <TransactionRow11 />
    </div>
  );
}

function TransactionRow12() {
  return (
    <div className="absolute h-[51.283px] left-0 top-0 w-[139.127px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[16.14px] not-italic text-[#364153] text-[12.211px] top-[16.1px] whitespace-nowrap">03-01</p>
    </div>
  );
}

function TransactionRow13() {
  return (
    <div className="absolute h-[51.283px] left-[139.13px] top-0 w-[229.059px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[11.93px] not-italic text-[#4a5565] text-[14.312px] top-[16.1px] whitespace-nowrap">Sale</p>
    </div>
  );
}

function Badge13() {
  return (
    <div className="absolute bg-[#ffedd4] h-[26.238px] left-[11.93px] rounded-[9.541px] top-[12.52px] w-[67.514px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[10.734px] py-[3.578px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] not-italic relative shrink-0 text-[#ca3500] text-[14.312px] whitespace-nowrap">+250K</p>
      </div>
      <div aria-hidden className="absolute border-[1.193px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9.541px]" />
    </div>
  );
}

function TransactionRow14() {
  return (
    <div className="absolute h-[51.283px] left-[368.18px] top-0 w-[197.119px]" data-name="TransactionRow">
      <Badge13 />
    </div>
  );
}

function TableRow5() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.193px] border-solid h-[51.283px] left-0 top-[101.97px] w-[565.305px]" data-name="Table Row">
      <TransactionRow12 />
      <TransactionRow13 />
      <TransactionRow14 />
    </div>
  );
}

function TransactionRow15() {
  return (
    <div className="absolute h-[51.283px] left-0 top-0 w-[139.127px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[16.14px] not-italic text-[#364153] text-[12.211px] top-[16.1px] whitespace-nowrap">03-01</p>
    </div>
  );
}

function TransactionRow16() {
  return (
    <div className="absolute h-[44.288px] left-[139.97px] top-[-0.54px] w-[227.768px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[11.08px] not-italic text-[#4a5565] text-[14.312px] top-[16.64px] whitespace-nowrap">Sale</p>
    </div>
  );
}

function Badge14() {
  return (
    <div className="absolute bg-[#ffedd4] h-[26.238px] left-[11.93px] rounded-[9.541px] top-[12.52px] w-[67.514px]" data-name="Badge">
      <div className="content-stretch flex items-center justify-center overflow-clip px-[10.734px] py-[3.578px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] not-italic relative shrink-0 text-[#ca3500] text-[14.312px] whitespace-nowrap">+250K</p>
      </div>
      <div aria-hidden className="absolute border-[1.193px] border-[rgba(0,0,0,0)] border-solid inset-0 pointer-events-none rounded-[9.541px]" />
    </div>
  );
}

function TransactionRow17() {
  return (
    <div className="absolute h-[51.283px] left-[368.18px] top-0 w-[197.119px]" data-name="TransactionRow">
      <Badge14 />
    </div>
  );
}

function TableRow6() {
  return (
    <div className="absolute h-[51.283px] left-0 top-[255.93px] w-[565.305px]" data-name="Table Row">
      <TransactionRow15 />
      <TransactionRow16 />
      <TransactionRow17 />
    </div>
  );
}

function TableBody() {
  return (
    <div className="absolute h-[255.222px] left-[-1.97px] top-[45.01px] w-[565.305px]" data-name="Table Body">
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
    <div className="h-[298.157px] relative shrink-0 w-full" data-name="Table">
      <TableHeader />
      <TableBody />
    </div>
  );
}

function App15() {
  return (
    <div className="absolute bg-white h-[369.068px] left-[30.44px] rounded-[11.926px] top-[85.27px] w-[567.311px]" data-name="App">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.193px] relative rounded-[inherit] size-full">
        <Table />
      </div>
      <div aria-hidden className="absolute border-[#ffedd4] border-[1.193px] border-solid inset-0 pointer-events-none rounded-[11.926px] shadow-[0px_1.193px_3.578px_0px_rgba(0,0,0,0.1),0px_1.193px_2.385px_-1.193px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function Icon43() {
  return (
    <div className="absolute left-[14.31px] size-[14.312px] top-[9.54px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g id="Icon">
          <path d={svgPaths.p956f280} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
      </svg>
    </div>
  );
}

function Button4() {
  return (
    <div className="h-[33.394px] opacity-30 relative rounded-[11.926px] shrink-0 w-[77.838px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon43 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[33.39px] not-italic text-[#4a5565] text-[14.312px] top-[7.15px] whitespace-nowrap">Prev</p>
      </div>
    </div>
  );
}

function Badge15() {
  return (
    <div className="h-[26.238px] relative rounded-[9.541px] shrink-0 w-[41.91px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[10.734px] py-[3.578px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] not-italic relative shrink-0 text-[#0a0a0a] text-[14.312px] whitespace-nowrap">1/5</p>
      </div>
      <div aria-hidden className="absolute border-[1.193px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9.541px]" />
    </div>
  );
}

function Icon44() {
  return (
    <div className="absolute left-[50.32px] size-[14.312px] top-[9.54px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g id="Icon">
          <path d={svgPaths.p65680} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
      </svg>
    </div>
  );
}

function Button5() {
  return (
    <div className="h-[33.394px] relative rounded-[11.926px] shrink-0 w-[78.937px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[14.31px] not-italic text-[#4a5565] text-[14.312px] top-[7.15px] whitespace-nowrap">Next</p>
        <Icon44 />
      </div>
    </div>
  );
}

function App16() {
  return (
    <div className="absolute content-stretch flex h-[33.394px] items-center justify-between left-[29.46px] top-[485px] w-[567.69px]" data-name="App">
      <Button4 />
      <Badge15 />
      <Button5 />
    </div>
  );
}

function Card6() {
  return (
    <div className="absolute border-[#ffd6a7] border-[1.193px] border-solid drop-shadow-[0px_11.926px_8.945px_rgba(0,0,0,0.1)] h-[560.984px] left-[1302.62px] rounded-[16.697px] top-[-14.82px] w-[628.471px]" style={{ backgroundImage: "linear-gradient(138.24734152246742deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card">
      <CardTitle6 />
      <Button3 />
      <App15 />
      <App16 />
    </div>
  );
}

function Icon45() {
  return (
    <div className="absolute left-0 size-[23.853px] top-[2.38px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p27816100} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle7() {
  return (
    <div className="absolute h-[28.623px] left-0 top-0 w-[209.474px]" data-name="CardTitle">
      <Icon45 />
      <div className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[0] left-[33.39px] not-italic text-[#0a0a0a] text-[19.082px] top-0 tracking-[-0.3727px] whitespace-nowrap">
        <p className="leading-[28.623px] mb-0">Select an accumulation period to view budget calculations</p>
        <p className="leading-[28.623px]">​</p>
      </div>
    </div>
  );
}

function Button6() {
  return (
    <div className="absolute content-stretch flex h-[25.947px] items-start left-[1761.67px] top-[3.44px] w-[95.654px]" data-name="Button">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[25.947px] not-italic relative shrink-0 text-[#f54900] text-[19.46px] whitespace-nowrap">View All →</p>
    </div>
  );
}

function App17() {
  return (
    <div className="absolute h-[28.623px] left-[29.46px] top-[28.69px] w-[567.69px]" data-name="App">
      <CardTitle7 />
      <Button6 />
    </div>
  );
}

function Frame3() {
  return (
    <div className="[word-break:break-word] absolute content-stretch flex font-['Inter:Medium',sans-serif] font-medium gap-[191.916px] items-center leading-[25.117px] left-[149.74px] not-italic text-[18.838px] text-white top-[25.31px] whitespace-nowrap">
      <p className="relative shrink-0">VARIABLE NAME</p>
      <p className="relative shrink-0">PERIOD</p>
      <p className="relative shrink-0">TARGETS</p>
      <p className="relative shrink-0">RESULTS</p>
      <p className="relative shrink-0">ACHIEVEMENT</p>
      <p className="relative shrink-0">POINTS</p>
    </div>
  );
}

function TableRow7() {
  return (
    <div className="absolute bg-gradient-to-r from-[#ff6900] h-[73.814px] left-[-0.21px] to-[#f54900] top-[-0.12px] w-[1855.886px]" data-name="Table Row">
      <Frame3 />
    </div>
  );
}

function TableHeader1() {
  return (
    <div className="absolute h-[42.935px] left-[-0.98px] top-[1.04px] w-[565.305px]" data-name="Table Header">
      <TableRow7 />
    </div>
  );
}

function TransactionRow18() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[91.606px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[55.12px] not-italic text-[#4a5565] text-[18.838px] top-[19.96px] whitespace-nowrap">sales</p>
    </div>
  );
}

function TransactionRow19() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.96px] whitespace-nowrap">Agosto 2026</p>
    </div>
  );
}

function TransactionRow20() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[44.45px] not-italic text-[#364153] text-[16.073px] top-[19.96px] whitespace-nowrap">100</p>
    </div>
  );
}

function TransactionRow21() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[31.79px] not-italic text-[#364153] text-[16.073px] top-[19.96px] whitespace-nowrap">95</p>
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
    <div className="absolute h-[6.327px] left-[-44.24px] top-[26.28px] w-[179.262px]">
      <Frame5 />
    </div>
  );
}

function TransactionRow22() {
  return (
    <div className="h-[67.487px] relative shrink-0 w-[90.685px]" data-name="TransactionRow">
      <Frame4 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow23() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.96px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame2() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[210.896px] items-center left-[calc(50%-2.74px)] top-[48.51px]">
      <TransactionRow18 />
      <TransactionRow19 />
      <TransactionRow20 />
      <TransactionRow21 />
      <TransactionRow22 />
      <TransactionRow23 />
    </div>
  );
}

function TransactionRow24() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[91.606px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[55.12px] not-italic text-[#4a5565] text-[18.838px] top-[19.95px] whitespace-nowrap">sales</p>
    </div>
  );
}

function TransactionRow25() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">Agosto 2026</p>
    </div>
  );
}

function TransactionRow26() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[44.45px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">100</p>
    </div>
  );
}

function TransactionRow27() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[31.79px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">95</p>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[6.327px] left-[-44.24px] top-[26.28px] w-[179.262px]">
      <Frame8 />
    </div>
  );
}

function TransactionRow28() {
  return (
    <div className="h-[67.487px] relative shrink-0 w-[90.685px]" data-name="TransactionRow">
      <Frame7 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow29() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame6() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex gap-[210.896px] items-center left-[calc(50%-2.74px)] top-[130.76px]">
      <TransactionRow24 />
      <TransactionRow25 />
      <TransactionRow26 />
      <TransactionRow27 />
      <TransactionRow28 />
      <TransactionRow29 />
    </div>
  );
}

function TransactionRow30() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[91.606px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[55.12px] not-italic text-[#4a5565] text-[18.838px] top-[19.96px] whitespace-nowrap">sales</p>
    </div>
  );
}

function TransactionRow31() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.96px] whitespace-nowrap">Agosto 2026</p>
    </div>
  );
}

function TransactionRow32() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[44.45px] not-italic text-[#364153] text-[16.073px] top-[19.96px] whitespace-nowrap">100</p>
    </div>
  );
}

function TransactionRow33() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[31.79px] not-italic text-[#364153] text-[16.073px] top-[19.96px] whitespace-nowrap">95</p>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame11() {
  return (
    <div className="absolute h-[6.327px] left-[-44.24px] top-[26.28px] w-[179.262px]">
      <Frame12 />
    </div>
  );
}

function TransactionRow34() {
  return (
    <div className="h-[67.487px] relative shrink-0 w-[90.685px]" data-name="TransactionRow">
      <Frame11 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow35() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.96px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame10() {
  return (
    <div className="content-stretch flex gap-[210.896px] items-center relative shrink-0 w-full">
      <TransactionRow30 />
      <TransactionRow31 />
      <TransactionRow32 />
      <TransactionRow33 />
      <TransactionRow34 />
      <TransactionRow35 />
    </div>
  );
}

function TransactionRow36() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[91.606px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[55.12px] not-italic text-[#4a5565] text-[18.838px] top-[19.95px] whitespace-nowrap">sales</p>
    </div>
  );
}

function TransactionRow37() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">Agosto 2026</p>
    </div>
  );
}

function TransactionRow38() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[44.45px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">100</p>
    </div>
  );
}

function TransactionRow39() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[31.79px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">95</p>
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

function Frame17() {
  return (
    <div className="absolute h-[6.327px] left-[-44.24px] top-[26.28px] w-[179.262px]">
      <Frame18 />
    </div>
  );
}

function TransactionRow40() {
  return (
    <div className="h-[67.487px] relative shrink-0 w-[90.685px]" data-name="TransactionRow">
      <Frame17 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow41() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame16() {
  return (
    <div className="content-stretch flex gap-[210.896px] items-center relative shrink-0 w-full">
      <TransactionRow36 />
      <TransactionRow37 />
      <TransactionRow38 />
      <TransactionRow39 />
      <TransactionRow40 />
      <TransactionRow41 />
    </div>
  );
}

function TransactionRow42() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[91.606px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[55.12px] not-italic text-[#4a5565] text-[18.838px] top-[19.95px] whitespace-nowrap">sales</p>
    </div>
  );
}

function TransactionRow43() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">Agosto 2026</p>
    </div>
  );
}

function TransactionRow44() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[44.45px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">100</p>
    </div>
  );
}

function TransactionRow45() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[31.79px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">95</p>
    </div>
  );
}

function Frame21() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame20() {
  return (
    <div className="absolute h-[6.327px] left-[-44.24px] top-[26.28px] w-[179.262px]">
      <Frame21 />
    </div>
  );
}

function TransactionRow46() {
  return (
    <div className="h-[67.487px] relative shrink-0 w-[90.685px]" data-name="TransactionRow">
      <Frame20 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.77px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow47() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame19() {
  return (
    <div className="content-stretch flex gap-[210.896px] items-center relative shrink-0 w-full">
      <TransactionRow42 />
      <TransactionRow43 />
      <TransactionRow44 />
      <TransactionRow45 />
      <TransactionRow46 />
      <TransactionRow47 />
    </div>
  );
}

function TransactionRow48() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[91.606px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[55.12px] not-italic text-[#4a5565] text-[18.838px] top-[19.95px] whitespace-nowrap">sales</p>
    </div>
  );
}

function TransactionRow49() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">Agosto 2026</p>
    </div>
  );
}

function TransactionRow50() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[44.45px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">100</p>
    </div>
  );
}

function TransactionRow51() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[31.79px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">95</p>
    </div>
  );
}

function Frame24() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame23() {
  return (
    <div className="absolute h-[6.327px] left-[-44.24px] top-[26.28px] w-[179.262px]">
      <Frame24 />
    </div>
  );
}

function TransactionRow52() {
  return (
    <div className="h-[67.487px] relative shrink-0 w-[90.685px]" data-name="TransactionRow">
      <Frame23 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow53() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame22() {
  return (
    <div className="content-stretch flex gap-[210.896px] items-center relative shrink-0 w-full">
      <TransactionRow48 />
      <TransactionRow49 />
      <TransactionRow50 />
      <TransactionRow51 />
      <TransactionRow52 />
      <TransactionRow53 />
    </div>
  );
}

function TransactionRow54() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[91.606px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[55.12px] not-italic text-[#4a5565] text-[18.838px] top-[19.95px] whitespace-nowrap">sales</p>
    </div>
  );
}

function TransactionRow55() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">Agosto 2026</p>
    </div>
  );
}

function TransactionRow56() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[44.45px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">100</p>
    </div>
  );
}

function TransactionRow57() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[31.79px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">95</p>
    </div>
  );
}

function Frame27() {
  return (
    <div className="absolute h-[6.327px] left-[0.54px] top-[-0.97px] w-[139.191px]">
      <div className="absolute bg-[#d9d9d9] h-[6.327px] left-0 rounded-[80.141px] top-0 w-[139.191px]" />
      <div className="absolute bg-gradient-to-r from-[#ff6900] h-[6.327px] left-0 rounded-[21.09px] to-[#ca3500] top-0 via-1/2 via-[#f54900] w-[97.012px]" />
    </div>
  );
}

function Frame26() {
  return (
    <div className="absolute h-[6.327px] left-[-44.24px] top-[26.28px] w-[179.262px]">
      <Frame27 />
    </div>
  );
}

function TransactionRow58() {
  return (
    <div className="h-[67.487px] relative shrink-0 w-[90.685px]" data-name="TransactionRow">
      <Frame26 />
      <p className="[word-break:break-word] absolute bg-clip-text bg-gradient-to-b font-['Inter:Semi_Bold',sans-serif] font-semibold from-[#ff8d28] leading-[25.117px] left-[106.03px] not-italic text-[16.073px] text-[transparent] to-[#c05a00] top-[14.76px] whitespace-nowrap">78%</p>
    </div>
  );
}

function TransactionRow59() {
  return (
    <div className="h-[66.622px] relative shrink-0 w-[83.945px]" data-name="TransactionRow">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[25.117px] left-[33.9px] not-italic text-[#364153] text-[16.073px] top-[19.95px] whitespace-nowrap">0</p>
    </div>
  );
}

function Frame25() {
  return (
    <div className="content-stretch flex gap-[210.896px] items-center relative shrink-0 w-full">
      <TransactionRow54 />
      <TransactionRow55 />
      <TransactionRow56 />
      <TransactionRow57 />
      <TransactionRow58 />
      <TransactionRow59 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[14.763px] items-start left-[138.93px] top-[48.51px] w-[1572.552px]">
      <Frame10 />
      <Frame16 />
      <Frame19 />
      <Frame22 />
      <Frame25 />
    </div>
  );
}

function TableRow8() {
  return (
    <div className="absolute border-[#f3f4f6] border-b-[1.193px] border-solid h-[128.647px] left-0 top-0 w-[1855.886px]" data-name="Table Row">
      <Frame2 />
      <Frame6 />
      <Frame9 />
    </div>
  );
}

function TableBody1() {
  return (
    <div className="absolute h-[255.184px] left-[-1.19px] top-[43.09px] w-[1855.886px]" data-name="Table Body">
      <TableRow8 />
    </div>
  );
}

function Table1() {
  return (
    <div className="h-[298.157px] relative shrink-0 w-full" data-name="Table">
      <TableHeader1 />
      <TableBody1 />
    </div>
  );
}

function App18() {
  return (
    <div className="absolute bg-white h-[512.478px] left-[33.83px] rounded-[11.926px] top-[3.18px] w-[1857.995px]" data-name="App">
      <div className="content-stretch flex flex-col items-start overflow-clip p-[1.193px] relative rounded-[inherit] size-full">
        <Table1 />
      </div>
      <div aria-hidden className="absolute border-[#ffedd4] border-[1.193px] border-solid inset-0 pointer-events-none rounded-[11.926px] shadow-[0px_1.193px_3.578px_0px_rgba(0,0,0,0.1),0px_1.193px_2.385px_-1.193px_rgba(0,0,0,0.1)]" />
    </div>
  );
}

function CardContent1() {
  return (
    <div className="absolute h-[381.641px] left-[0.83px] top-[86.31px] w-[624.937px]" data-name="CardContent">
      <App18 />
    </div>
  );
}

function Icon46() {
  return (
    <div className="absolute left-[14.31px] size-[14.312px] top-[9.54px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g id="Icon">
          <path d={svgPaths.p20246400} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
      </svg>
    </div>
  );
}

function Button7() {
  return (
    <div className="h-[33.394px] opacity-30 relative rounded-[11.926px] shrink-0 w-[77.838px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon46 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[33.39px] not-italic text-[#4a5565] text-[14.312px] top-[7.15px] whitespace-nowrap">Prev</p>
      </div>
    </div>
  );
}

function Badge16() {
  return (
    <div className="h-[26.238px] relative rounded-[9.541px] shrink-0 w-[41.91px]" data-name="Badge">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-center justify-center overflow-clip px-[10.734px] py-[3.578px] relative rounded-[inherit] size-full">
        <p className="[word-break:break-word] font-['Inter:Medium',sans-serif] font-medium leading-[19.082px] not-italic relative shrink-0 text-[#0a0a0a] text-[14.312px] whitespace-nowrap">1/5</p>
      </div>
      <div aria-hidden className="absolute border-[1.193px] border-[rgba(0,0,0,0.1)] border-solid inset-0 pointer-events-none rounded-[9.541px]" />
    </div>
  );
}

function Icon47() {
  return (
    <div className="absolute left-[50.31px] size-[14.312px] top-[9.54px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="14.3115" preserveAspectRatio="none" viewBox="0 0 14.3115 14.3115" width="14.3115">
        <g id="Icon">
          <path d={svgPaths.p28d95680} id="Vector" stroke="#4A5565" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.19263" />
        </g>
      </svg>
    </div>
  );
}

function Button8() {
  return (
    <div className="h-[33.394px] relative rounded-[11.926px] shrink-0 w-[78.937px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] left-[14.31px] not-italic text-[#4a5565] text-[14.312px] top-[7.15px] whitespace-nowrap">Next</p>
        <Icon47 />
      </div>
    </div>
  );
}

function App19() {
  return (
    <div className="-translate-x-1/2 absolute content-stretch flex h-[33.394px] items-center justify-between left-[calc(50%-40.94px)] top-[625.17px] w-[567.69px]" data-name="App">
      <Button7 />
      <Badge16 />
      <Button8 />
    </div>
  );
}

function Card7() {
  return (
    <div className="absolute border-[#ffd6a7] border-[1.193px] border-solid drop-shadow-[0px_11.926px_8.945px_rgba(0,0,0,0.1)] h-[691.74px] left-[-0.72px] rounded-[16.697px] top-[1214.7px] w-[1931.809px]" style={{ backgroundImage: "linear-gradient(160.29864174650353deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card">
      <App17 />
      <CardContent1 />
      <App19 />
    </div>
  );
}

function Icon48() {
  return (
    <div className="absolute left-0 size-[23.263px] top-[2.32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.2631" preserveAspectRatio="none" viewBox="0 0 23.2631 23.2631" width="23.2631">
        <g id="Icon">
          <path d={svgPaths.p393f6100} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93859" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle8() {
  return (
    <div className="h-[27.916px] relative shrink-0 w-[204.297px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon48 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[27.916px] left-[32.57px] not-italic text-[#0a0a0a] text-[18.61px] top-0 tracking-[-0.3635px] whitespace-nowrap">Ranking Actual</p>
      </div>
    </div>
  );
}

function Button9() {
  return (
    <div className="h-[18.61px] relative shrink-0 w-[68.608px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.61px] not-italic relative shrink-0 text-[#f54900] text-[13.958px] whitespace-nowrap">View All →</p>
      </div>
    </div>
  );
}

function App20() {
  return (
    <div className="absolute content-stretch flex h-[27.916px] items-center justify-between left-[28.73px] top-[27.98px] w-[553.662px]" data-name="App">
      <CardTitle8 />
      <Button9 />
    </div>
  );
}

function Frame28() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute h-[75.923px] left-[calc(50%-1.05px)] not-italic top-[51.56px] w-[103.339px] whitespace-nowrap">
      <p className="absolute bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#ff6900] leading-[53.252px] left-[27.42px] text-[39.939px] text-[transparent] to-[#ca3500] top-0 tracking-[0.3705px] via-1/2 via-[#f54900]">#1</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.97px] left-[calc(50%-66.43px)] text-[#6a7282] text-[13.979px] top-[54.83px] tracking-[-0.1502px]">#1 of 2210 Members</p>
    </div>
  );
}

function Card8() {
  return (
    <div className="absolute border-[#ffd6a7] border-[1.163px] border-solid drop-shadow-[0px_11.632px_8.724px_rgba(0,0,0,0.1)] h-[156.063px] left-[-0.72px] rounded-[16.284px] top-[392.21px] w-[628.471px]" style={{ backgroundImage: "linear-gradient(166.05427050956968deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card">
      <App20 />
      <Frame28 />
    </div>
  );
}

function Icon49() {
  return (
    <div className="absolute left-0 size-[23.263px] top-[2.32px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.2631" preserveAspectRatio="none" viewBox="0 0 23.2631 23.2631" width="23.2631">
        <g id="Icon">
          <path d={svgPaths.p20e41f80} id="Vector" stroke="#F54900" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.93859" />
        </g>
      </svg>
    </div>
  );
}

function CardTitle9() {
  return (
    <div className="h-[27.916px] relative shrink-0 w-[204.297px]" data-name="CardTitle">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <Icon49 />
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[27.916px] left-[32.57px] not-italic text-[#0a0a0a] text-[18.61px] top-0 tracking-[-0.3635px] whitespace-nowrap">Program Balance</p>
      </div>
    </div>
  );
}

function Button10() {
  return (
    <div className="h-[18.61px] relative shrink-0 w-[68.608px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex items-start relative size-full">
        <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[18.61px] not-italic relative shrink-0 text-[#f54900] text-[13.958px] whitespace-nowrap">View All →</p>
      </div>
    </div>
  );
}

function App21() {
  return (
    <div className="absolute content-stretch flex h-[27.916px] items-center justify-between left-[35.06px] top-[27.98px] w-[553.662px]" data-name="App">
      <CardTitle9 />
      <Button10 />
    </div>
  );
}

function Frame29() {
  return (
    <div className="-translate-x-1/2 [word-break:break-word] absolute h-[75.923px] left-[calc(50%+3.16px)] not-italic top-[51.56px] w-[103.339px] whitespace-nowrap">
      <p className="absolute bg-clip-text bg-gradient-to-r font-['Inter:Bold',sans-serif] font-bold from-[#ff6900] leading-[53.252px] left-[27.42px] text-[39.939px] text-[transparent] to-[#ca3500] top-0 tracking-[0.3705px] via-1/2 via-[#f54900]">66</p>
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[19.97px] left-[calc(50%-36.91px)] text-[#6a7282] text-[13.979px] top-[54.83px] tracking-[-0.1502px]">Total Points</p>
    </div>
  );
}

function Card9() {
  return (
    <div className="absolute border-[#ffd6a7] border-[1.163px] border-solid drop-shadow-[0px_11.632px_8.724px_rgba(0,0,0,0.1)] h-[156.063px] left-[648.84px] rounded-[16.284px] top-[392.21px] w-[632.689px]" style={{ backgroundImage: "linear-gradient(166.14364858513943deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 100%)" }} data-name="Card">
      <App21 />
      <Frame29 />
    </div>
  );
}

function Container1() {
  return (
    <div className="h-[2019.117px] relative shrink-0 w-full" data-name="Container">
      <Card4 />
      <Card5 />
      <Card6 />
      <Card7 />
      <Card8 />
      <Card9 />
    </div>
  );
}

function MainContent() {
  return (
    <div className="content-stretch flex flex-col gap-[38.164px] h-[2379.291px] items-start relative shrink-0 w-full" data-name="Main Content">
      <Container />
      <Container1 />
    </div>
  );
}

function App() {
  return (
    <div className="absolute content-stretch flex flex-col h-[2530.754px] items-start left-0 pl-[333.936px] pr-[28.623px] pt-[122.841px] top-0 w-[2301.77px]" style={{ backgroundImage: "linear-gradient(132.28712547212785deg, rgb(249, 250, 251) 0%, rgba(255, 247, 237, 0.2) 50%, rgb(249, 250, 251) 100%)" }} data-name="App">
      <MainContent />
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

function Icon50() {
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

function Container15() {
  return (
    <div className="absolute h-[54.861px] left-[4.22px] top-[2.11px] w-[534.297px]" data-name="Container">
      <TextInput />
      <Icon50 />
    </div>
  );
}

function Icon51() {
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

function Text3() {
  return <div className="absolute bg-[#ff6900] left-[31.01px] opacity-100 rounded-[40017884px] size-[9.541px] top-[7.15px]" data-name="Text" />;
}

function Button11() {
  return (
    <div className="absolute left-0 rounded-[16.697px] size-[47.705px] top-0" data-name="Button">
      <Icon51 />
      <Text3 />
    </div>
  );
}

function Text4() {
  return (
    <div className="flex-[1_0_0] h-[23.853px] min-w-px relative" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[#364153] text-[16.697px] top-0 tracking-[-0.1794px] whitespace-nowrap">Spanish</p>
      </div>
    </div>
  );
}

function Icon52() {
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

function Button12() {
  return (
    <div className="absolute bg-[#f9fafb] content-stretch flex gap-[9.541px] h-[45.32px] items-center left-[62.02px] px-[20.275px] py-[1.193px] rounded-[16.697px] top-[1.19px] w-[130.406px]" data-name="Button">
      <div aria-hidden className="absolute border-[#e5e7eb] border-[1.193px] border-solid inset-0 pointer-events-none rounded-[16.697px]" />
      <Text4 />
      <Icon52 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute h-[47.705px] left-[1751.01px] top-[5.69px] w-[192.423px]" data-name="Container">
      <Button11 />
      <Button12 />
    </div>
  );
}

function Container14() {
  return (
    <div className="h-[54.861px] relative shrink-0 w-full" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function App22() {
  return (
    <div className="absolute bottom-0 h-[2429.524169921875px] left-[301.58px] pointer-events-none top-0">
      <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[97.012px] items-start pb-[1.193px] pointer-events-auto pt-[19.082px] px-[28.623px] sticky top-0 w-[2001.405px]" data-name="App">
        <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.193px] border-solid inset-0 pointer-events-none shadow-[0px_1.193px_3.578px_0px_rgba(0,0,0,0.1),0px_1.193px_2.385px_0px_rgba(0,0,0,0.1)]" />
        <Container14 />
      </div>
    </div>
  );
}

function App24() {
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

function Container21() {
  return (
    <div className="h-[28.623px] relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-0 not-italic text-[#101828] text-[19.082px] top-0 tracking-[-0.3727px] whitespace-nowrap">Dashboard</p>
    </div>
  );
}

function Container22() {
  return (
    <div className="content-stretch flex h-[19.082px] items-start relative shrink-0 w-full" data-name="Container">
      <p className="[word-break:break-word] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] not-italic relative shrink-0 text-[#f54900] text-[14.312px] whitespace-nowrap">Premium User</p>
    </div>
  );
}

function App25() {
  return (
    <div className="flex-[1_0_0] h-[47.705px] min-w-px relative" data-name="App">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start relative size-full">
        <Container21 />
        <Container22 />
      </div>
    </div>
  );
}

function Container20() {
  return (
    <div className="h-[47.705px] relative shrink-0 w-[157.017px]" data-name="Container">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex gap-[14.312px] items-center relative size-full">
        <App24 />
        <App25 />
      </div>
    </div>
  );
}

function Icon53() {
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

function Button13() {
  return (
    <div className="relative rounded-[11.926px] shrink-0 size-[42.935px]" data-name="Button">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid content-stretch flex flex-col items-start pt-[9.541px] px-[9.541px] relative size-full">
        <Icon53 />
      </div>
    </div>
  );
}

function Container19() {
  return (
    <div className="content-stretch flex h-[47.705px] items-center justify-between relative shrink-0 w-full" data-name="Container">
      <Container20 />
      <Button13 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute content-stretch flex flex-col h-[96.603px] items-start left-0 pb-[1.193px] pt-[23.853px] px-[23.853px] top-0 w-[304.12px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-b-[1.193px] border-solid inset-0 pointer-events-none" />
      <Container19 />
    </div>
  );
}

function Icon54() {
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

function Text5() {
  return (
    <div className="h-[28.623px] relative shrink-0 w-[60.377px]" data-name="Text">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[28.623px] left-0 not-italic text-[19.082px] text-white top-0 tracking-[-0.3727px] whitespace-nowrap">Logout</p>
      </div>
    </div>
  );
}

function Button14() {
  return (
    <div className="bg-gradient-to-r content-stretch flex from-[#ff6900] gap-[9.541px] h-[57.246px] items-center justify-center relative rounded-[16.697px] shrink-0 to-[#f54900] w-full" data-name="Button">
      <Icon54 />
      <Text5 />
    </div>
  );
}

function Container23() {
  return (
    <div className="absolute content-stretch flex flex-col h-[96.603px] items-start left-0 pt-[20.275px] px-[19.082px] top-[1402.53px] w-[304.12px]" data-name="Container">
      <div aria-hidden className="absolute border-[#e5e7eb] border-solid border-t-[1.193px] inset-0 pointer-events-none" />
      <Button14 />
    </div>
  );
}

function Container24() {
  return (
    <div className="absolute content-stretch flex h-[19.082px] items-start left-0 px-[14.312px] top-0 w-[275.497px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] min-w-px not-italic relative text-[#99a1af] text-[14.312px] tracking-[0.7156px] uppercase">Main</p>
    </div>
  );
}

function Icon55() {
  return (
    <div className="relative shrink-0 size-[23.853px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p14820060} id="Vector" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d="M17.8916 16.8864V8.93555" id="Vector_2" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d="M12.9219 16.8911V4.96484" id="Vector_3" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d="M7.9521 16.8939V13.9123" id="Vector_4" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function DesktopNavItem() {
  return (
    <div className="flex-[1_0_0] h-[23.853px] min-w-px relative" data-name="DesktopNavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[16.697px] text-white top-0 tracking-[-0.1794px] whitespace-nowrap">Dashboard</p>
      </div>
    </div>
  );
}

function DesktopNavItem1() {
  return <div className="bg-white relative rounded-[40017884px] shrink-0 size-[9.541px]" data-name="DesktopNavItem" />;
}

function Button15() {
  return (
    <div className="absolute bg-gradient-to-r content-stretch drop-shadow-[0px_11.926px_8.945px_#ffd6a7,0px_4.771px_3.578px_#ffd6a7] flex from-[#ff6900] gap-[14.312px] h-[47.705px] items-center left-0 px-[19.082px] rounded-[16.697px] to-[#f54900] top-[31.1px] w-[275.497px]" data-name="Button">
      <Icon55 />
      <DesktopNavItem />
      <DesktopNavItem1 />
    </div>
  );
}

function Icon56() {
  return (
    <div className="relative shrink-0 size-[23.853px]" data-name="Icon">
      <svg className="absolute block inset-0 size-full" fill="none" height="23.8525" preserveAspectRatio="none" viewBox="0 0 23.8525 23.8525" width="23.8525">
        <g id="Icon">
          <path d={svgPaths.p39710a90} id="Vector" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p1667e940} id="Vector_2" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p1f1ddd00} id="Vector_3" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
          <path d={svgPaths.p3bd67580} id="Vector_4" stroke="#364153" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.98771" />
        </g>
      </svg>
    </div>
  );
}

function DesktopNavItem2() {
  return (
    <div className="h-[23.853px] relative shrink-0 w-[32.294px]" data-name="DesktopNavItem">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid relative size-full">
        <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[23.853px] left-0 not-italic text-[#364153] text-[16.697px] top-0 tracking-[-0.1794px] whitespace-nowrap">Wall</p>
      </div>
    </div>
  );
}

function Button16() {
  return (
    <div className="absolute content-stretch flex gap-[14.312px] h-[47.705px] items-center left-0 pl-[19.082px] rounded-[16.697px] top-[86.57px] w-[275.497px]" data-name="Button">
      <Icon56 />
      <DesktopNavItem2 />
    </div>
  );
}

function Container25() {
  return (
    <div className="absolute content-stretch flex h-[19.082px] items-start left-0 px-[14.312px] top-[196.13px] w-[275.497px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] min-w-px not-italic relative text-[#99a1af] text-[14.312px] tracking-[0.7156px] uppercase">Programs</p>
    </div>
  );
}

function Icon57() {
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

function Button17() {
  return (
    <div className="absolute content-stretch flex gap-[14.312px] h-[47.705px] items-center left-0 pl-[19.082px] rounded-[16.697px] top-[227.75px] w-[275.497px]" data-name="Button">
      <Icon57 />
      <DesktopNavItem3 />
    </div>
  );
}

function Container26() {
  return (
    <div className="absolute content-stretch flex h-[19.082px] items-start left-0 px-[14.312px] top-[291.3px] w-[275.497px]" data-name="Container">
      <p className="[word-break:break-word] flex-[1_0_0] font-['Inter:Regular',sans-serif] font-normal leading-[19.082px] min-w-px not-italic relative text-[#99a1af] text-[14.312px] tracking-[0.7156px] uppercase">Settings</p>
    </div>
  );
}

function Icon58() {
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

function Button18() {
  return (
    <div className="absolute content-stretch flex gap-[14.312px] h-[47.705px] items-center left-0 pl-[19.082px] rounded-[16.697px] top-[323.41px] w-[275.497px]" data-name="Button">
      <Icon58 />
      <DesktopNavItem4 />
    </div>
  );
}

function Icon59() {
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

function Button19() {
  return (
    <div className="absolute content-stretch flex gap-[14.312px] h-[47.705px] items-center left-0 pl-[19.082px] rounded-[16.697px] top-[133.89px] w-[275.497px]" data-name="Button">
      <Icon59 />
      <DesktopNavItem5 />
    </div>
  );
}

function App26() {
  return (
    <div className="h-[486.592px] relative shrink-0 w-full" data-name="App">
      <Container24 />
      <Button15 />
      <Button16 />
      <Container25 />
      <Button17 />
      <Container26 />
      <Button18 />
      <Button19 />
    </div>
  );
}

function PrimitiveDiv() {
  return (
    <div className="absolute content-stretch flex flex-col h-[1277.303px] items-start left-[14.31px] overflow-clip top-[110.92px] w-[275.497px]" data-name="Primitive.div">
      <App26 />
    </div>
  );
}

function Container17() {
  return (
    <div className="h-[1499.132px] relative shrink-0 w-full" data-name="Container">
      <Container18 />
      <Container23 />
      <PrimitiveDiv />
    </div>
  );
}

function App23() {
  return (
    <div className="absolute bottom-0 h-[2429.524169921875px] left-0 pointer-events-none top-0">
      <div className="bg-[rgba(255,255,255,0.8)] content-stretch flex flex-col h-[1499.132px] items-start pointer-events-auto pr-[1.193px] sticky top-0 w-[305.313px]" data-name="App">
        <div aria-hidden className="absolute border-[#e5e7eb] border-r-[1.193px] border-solid inset-0 pointer-events-none shadow-[0px_29.816px_59.631px_0px_rgba(0,0,0,0.25)]" />
        <Container17 />
      </div>
    </div>
  );
}

export default function Web() {
  return (
    <div className="bg-white relative size-full" data-name="Web">
      <App />
      <App22 />
      <App23 />
    </div>
  );
}