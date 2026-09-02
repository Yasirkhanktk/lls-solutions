import svgPaths from "./svg-i458a46lj2";
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

function Frame() {
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
      <Frame />
    </div>
  );
}

function Frame1() {
  return (
    <div className="absolute h-[73.814px] left-[31.65px] top-[145.7px] w-[778.714px]">
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
        Walls
      </p>
    </div>
  );
}

function Paragraph() {
  return (
    <div className="absolute h-[41.546px] left-0 top-[62.47px] w-[725.483px]" data-name="Paragraph">
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal leading-[41.546px] left-[4.63px] not-italic text-[#4a5565] text-[27.697px] top-[0.76px] tracking-[-0.541px] whitespace-nowrap">{`Here's what's happening in your Wall `}</p>
    </div>
  );
}

function Frame3() {
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
      <Frame3 />
    </div>
  );
}

function Icon2() {
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
      <Icon2 />
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

function Badge1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0.2)] content-stretch flex h-[40.333px] items-center justify-center left-[664.78px] overflow-clip px-[16.588px] py-[4.147px] rounded-[16.588px] top-[20.79px] w-[121px]" data-name="Badge">
      <p className="[word-break:break-word] font-['Inter:Semi_Bold',sans-serif] font-semibold leading-[33.176px] not-italic relative shrink-0 text-[21.23px] text-white whitespace-nowrap">Filters</p>
    </div>
  );
}

function Card() {
  return (
    <div className="bg-gradient-to-r from-[#ff6900] h-[81px] overflow-clip relative rounded-[16.697px] shadow-[0px_11.926px_17.889px_-3.578px_rgba(0,0,0,0.1),0px_4.771px_7.156px_-4.771px_rgba(0,0,0,0.1)] shrink-0 to-[#ca3500] via-1/2 via-[#f54900] w-[804px]" data-name="Card">
      <CardTitle />
      <Badge />
      <CardContent />
      <Badge1 />
    </div>
  );
}

function Frame2() {
  return (
    <div className="content-stretch flex flex-col gap-[44.288px] items-start relative shrink-0 w-full">
      <App1 />
      <Card />
    </div>
  );
}

function Text2() {
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

function MdiHeart() {
  return (
    <div className="absolute left-0 size-[33.643px] top-0" data-name="mdi:heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.6433" preserveAspectRatio="none" viewBox="0 0 33.6433 33.6433" width="33.6433">
        <g id="mdi:heart">
          <path d={svgPaths.p36eb5e80} fill="url(#paint0_linear_0_24)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_24" x1="2.80298" x2="30.8391" y1="17.0666" y2="17.0666">
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
    <div className="absolute left-[109.34px] size-[31.541px] top-[1.05px]" data-name="iconamoon:comment-light">
      <svg className="absolute block inset-0 size-full" fill="none" height="31.5406" preserveAspectRatio="none" viewBox="0 0 31.5406 31.5406" width="31.5406">
        <g id="iconamoon:comment-light">
          <path d={svgPaths.p3ebf3d80} id="Vector" stroke="url(#paint0_linear_0_21)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.02102" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_21" x1="3.94287" x2="27.5983" y1="15.773" y2="15.773">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame7() {
  return (
    <div className="absolute h-[33.643px] left-[19px] top-[447px] w-[165.395px]">
      <MdiHeart />
      <IconamoonCommentLight />
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[40.16px] text-[16.822px] text-black top-[5.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        23k
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[147.4px] text-[16.822px] text-black top-[7.07px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3k
      </p>
    </div>
  );
}

function ImageContainer() {
  return (
    <div className="h-[508px] overflow-clip relative rounded-[16.7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(144.62240889727178deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 95.841%)" }} data-name="Image Container">
      <div className="absolute left-[19.45px] top-[33.85px]" data-name="Profile">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14.708px] items-center relative size-full">
            <div className="bg-gradient-to-r from-[#ff6900] relative rounded-[16px] shrink-0 size-[68.636px] to-[#ca3500] via-1/2 via-[#f54900]" data-name="avatar" />
            <Text2 />
          </div>
        </div>
      </div>
      <div className="absolute border-[#ff6900] border-[1.226px] border-solid h-[292px] left-[20px] right-[19px] rounded-[11.031px] top-[130px]" style={{ backgroundImage: "linear-gradient(159.1081771836873deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} />
      <Frame7 />
    </div>
  );
}

function Frame5() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[804px]">
      <ImageContainer />
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

function MdiHeart1() {
  return (
    <div className="absolute left-0 size-[33.643px] top-0" data-name="mdi:heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.6433" preserveAspectRatio="none" viewBox="0 0 33.6433 33.6433" width="33.6433">
        <g id="mdi:heart">
          <path d={svgPaths.p36eb5e80} fill="url(#paint0_linear_0_24)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_24" x1="2.80298" x2="30.8391" y1="17.0666" y2="17.0666">
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
    <div className="absolute left-[109.34px] size-[31.541px] top-[1.05px]" data-name="iconamoon:comment-light">
      <svg className="absolute block inset-0 size-full" fill="none" height="31.5406" preserveAspectRatio="none" viewBox="0 0 31.5406 31.5406" width="31.5406">
        <g id="iconamoon:comment-light">
          <path d={svgPaths.p3ebf3d80} id="Vector" stroke="url(#paint0_linear_0_21)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.02102" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_21" x1="3.94287" x2="27.5983" y1="15.773" y2="15.773">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame8() {
  return (
    <div className="absolute h-[33.643px] left-[19px] top-[447px] w-[165.395px]">
      <MdiHeart1 />
      <IconamoonCommentLight1 />
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[40.16px] text-[16.822px] text-black top-[5.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        23k
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[147.4px] text-[16.822px] text-black top-[7.07px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3k
      </p>
    </div>
  );
}

function ImageContainer1() {
  return (
    <div className="h-[508px] overflow-clip relative rounded-[16.7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(144.62240889727178deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 95.841%)" }} data-name="Image Container">
      <div className="absolute left-[19.45px] top-[33.85px]" data-name="Profile">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14.708px] items-center relative size-full">
            <div className="bg-gradient-to-r from-[#ff6900] relative rounded-[16px] shrink-0 size-[68.636px] to-[#ca3500] via-1/2 via-[#f54900]" data-name="avatar" />
            <Text3 />
          </div>
        </div>
      </div>
      <div className="absolute border-[#ff6900] border-[1.226px] border-solid h-[292px] left-[20px] right-[19px] rounded-[11.031px] top-[130px]" style={{ backgroundImage: "linear-gradient(159.1081771836873deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} />
      <Frame8 />
    </div>
  );
}

function Frame6() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[804px]">
      <ImageContainer1 />
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

function MdiHeart2() {
  return (
    <div className="absolute left-0 size-[33.643px] top-0" data-name="mdi:heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.6433" preserveAspectRatio="none" viewBox="0 0 33.6433 33.6433" width="33.6433">
        <g id="mdi:heart">
          <path d={svgPaths.p36eb5e80} fill="url(#paint0_linear_0_24)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_24" x1="2.80298" x2="30.8391" y1="17.0666" y2="17.0666">
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
    <div className="absolute left-[109.34px] size-[31.541px] top-[1.05px]" data-name="iconamoon:comment-light">
      <svg className="absolute block inset-0 size-full" fill="none" height="31.5406" preserveAspectRatio="none" viewBox="0 0 31.5406 31.5406" width="31.5406">
        <g id="iconamoon:comment-light">
          <path d={svgPaths.p3ebf3d80} id="Vector" stroke="url(#paint0_linear_0_21)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.02102" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_21" x1="3.94287" x2="27.5983" y1="15.773" y2="15.773">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame10() {
  return (
    <div className="absolute h-[33.643px] left-[19px] top-[447px] w-[165.395px]">
      <MdiHeart2 />
      <IconamoonCommentLight2 />
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[40.16px] text-[16.822px] text-black top-[5.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        23k
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[147.4px] text-[16.822px] text-black top-[7.07px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3k
      </p>
    </div>
  );
}

function ImageContainer2() {
  return (
    <div className="h-[508px] overflow-clip relative rounded-[16.7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(144.62240889727178deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 95.841%)" }} data-name="Image Container">
      <div className="absolute left-[19.45px] top-[33.85px]" data-name="Profile">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14.708px] items-center relative size-full">
            <div className="bg-gradient-to-r from-[#ff6900] relative rounded-[16px] shrink-0 size-[68.636px] to-[#ca3500] via-1/2 via-[#f54900]" data-name="avatar" />
            <Text4 />
          </div>
        </div>
      </div>
      <div className="absolute border-[#ff6900] border-[1.226px] border-solid h-[292px] left-[20px] right-[19px] rounded-[11.031px] top-[130px]" style={{ backgroundImage: "linear-gradient(159.1081771836873deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} />
      <Frame10 />
    </div>
  );
}

function Frame9() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[804px]">
      <ImageContainer2 />
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

function MdiHeart3() {
  return (
    <div className="absolute left-0 size-[33.643px] top-0" data-name="mdi:heart">
      <svg className="absolute block inset-0 size-full" fill="none" height="33.6433" preserveAspectRatio="none" viewBox="0 0 33.6433 33.6433" width="33.6433">
        <g id="mdi:heart">
          <path d={svgPaths.p36eb5e80} fill="url(#paint0_linear_0_24)" id="Vector" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_24" x1="2.80298" x2="30.8391" y1="17.0666" y2="17.0666">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function IconamoonCommentLight3() {
  return (
    <div className="absolute left-[109.34px] size-[31.541px] top-[1.05px]" data-name="iconamoon:comment-light">
      <svg className="absolute block inset-0 size-full" fill="none" height="31.5406" preserveAspectRatio="none" viewBox="0 0 31.5406 31.5406" width="31.5406">
        <g id="iconamoon:comment-light">
          <path d={svgPaths.p3ebf3d80} id="Vector" stroke="url(#paint0_linear_0_21)" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.02102" />
        </g>
        <defs>
          <linearGradient gradientUnits="userSpaceOnUse" id="paint0_linear_0_21" x1="3.94287" x2="27.5983" y1="15.773" y2="15.773">
            <stop stopColor="#FF6900" />
            <stop offset="0.5" stopColor="#F54900" />
            <stop offset="1" stopColor="#CA3500" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
}

function Frame12() {
  return (
    <div className="absolute h-[33.643px] left-[19px] top-[447px] w-[165.395px]">
      <MdiHeart3 />
      <IconamoonCommentLight3 />
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[40.16px] text-[16.822px] text-black top-[5.72px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        23k
      </p>
      <p className="[word-break:break-word] absolute font-['Roboto:Regular',sans-serif] font-normal leading-[normal] left-[147.4px] text-[16.822px] text-black top-[7.07px] whitespace-nowrap" style={{ fontVariationSettings: '"wdth" 100' }}>
        3k
      </p>
    </div>
  );
}

function ImageContainer3() {
  return (
    <div className="h-[508px] overflow-clip relative rounded-[16.7px] shrink-0 w-full" style={{ backgroundImage: "linear-gradient(144.62240889727178deg, rgb(255, 247, 237) 0%, rgb(255, 255, 255) 95.841%)" }} data-name="Image Container">
      <div className="absolute left-[19.45px] top-[33.85px]" data-name="Profile">
        <div className="flex flex-row items-center size-full">
          <div className="content-stretch flex gap-[14.708px] items-center relative size-full">
            <div className="bg-gradient-to-r from-[#ff6900] relative rounded-[16px] shrink-0 size-[68.636px] to-[#ca3500] via-1/2 via-[#f54900]" data-name="avatar" />
            <Text5 />
          </div>
        </div>
      </div>
      <div className="absolute border-[#ff6900] border-[1.226px] border-solid h-[292px] left-[20px] right-[19px] rounded-[11.031px] top-[130px]" style={{ backgroundImage: "linear-gradient(159.1081771836873deg, rgb(255, 247, 237) 0%, rgb(255, 237, 212) 100%)" }} />
      <Frame12 />
    </div>
  );
}

function Frame11() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-[804px]">
      <ImageContainer3 />
    </div>
  );
}

function Frame4() {
  return (
    <div className="absolute content-stretch flex flex-col gap-[31.634px] items-start left-[23.22px] top-[276.45px] w-[803.515px]">
      <Frame2 />
      <Frame5 />
      <Frame6 />
      <Frame9 />
      <Frame11 />
    </div>
  );
}

export default function PhoneRespomsive() {
  return (
    <div className="bg-white relative size-full" data-name="Phone Respomsive">
      <Frame1 />
      <Frame4 />
    </div>
  );
}