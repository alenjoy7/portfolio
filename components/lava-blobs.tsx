import React from "react";

// Add: helper to convert CSS text to React style object
const cssStrToObj = (css: string): React.CSSProperties => {
  const obj: Record<string, string> = {};
  css.split(";").forEach((rule) => {
    const [prop, ...rest] = rule.split(":");
    if (!prop || rest.length === 0) return;
    let key = prop.trim();
    let value = rest.join(":").trim();
    if (!key || !value) return;
    // Keep CSS variables as-is; camelCase the rest
    if (!key.startsWith("--")) {
      key = key.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
    }
    obj[key] = value;
  });
  return obj as React.CSSProperties;
};

// Add: Droplet component to keep JSX concise
const Droplet: React.FC<{ className?: string; css: string }> = ({
  className,
  css,
}) => <i className={className} style={cssStrToObj(css)} />;

const LavaBlobs = () => {
  return (
    <div className="lava-blur-wrapper" aria-hidden="true">
      <div className="lava-wrapper">
        <div className="lava tail"></div>
        <div className="lava blob group-1 droplets-0"></div>
        <div className="lava blob clone"></div>
        <svg className="lava-filter">
          <filter id="lava-meld">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="12"
              edgeMode="duplicate"
            ></feGaussianBlur>
            <feColorMatrix
              type="matrix"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 40 -10"
              colorInterpolationFilters="sRGB"
            ></feColorMatrix>
          </filter>
        </svg>
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 176.361px;
            height: 134.4px;
            --droplet-move-x: -467.4482686814375px;
            --droplet-move-y: -130.18359654153173px;
            --droplet-flow-x: -471.1353853421541px;
            --droplet-flow-y: -122.98984381041798px;
            --droplet-angle: 162.98667853617368deg;
            animation: 1.49977s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.99932s ease-in-out 2.29977s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 142.291px;
            height: 106.717px;
            --droplet-move-x: 72.36183223016445px;
            --droplet-move-y: 288.37644272133167px;
            --droplet-flow-x: 47.291907903195295px;
            --droplet-flow-y: 291.71839570888085px;
            --droplet-angle: 13.313572489228129deg;
            animation: 1.19696s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.09089s ease-in-out 1.99696s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 28.4499px;
            height: 25.8022px;
            --droplet-move-x: 222.44363229325631px;
            --droplet-move-y: 48.42682088036801px;
            --droplet-flow-x: 236.48199854510938px;
            --droplet-flow-y: 11.06089646272472px;
            --droplet-angle: 117.72324578533775deg;
            animation: 1.11049s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              5.83147s ease-in-out 1.91049s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 158.475px;
            height: 158.274px;
            --droplet-move-x: 255.71176143581948px;
            --droplet-move-y: 204.0022470442839px;
            --droplet-flow-x: 260.23409651806764px;
            --droplet-flow-y: 219.3363037817452px;
            --droplet-angle: 127.6168520920517deg;
            animation: 1.63972s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.41916s ease-in-out 2.43972s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 27.2575px;
            height: 22.9521px;
            --droplet-move-x: -559.0536862613536px;
            --droplet-move-y: -165.67107203919554px;
            --droplet-flow-x: -583.0403238264918px;
            --droplet-flow-y: -185.5992140399012px;
            --droplet-angle: 106.81204552271005deg;
            animation: 1.71998s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.65995s ease-in-out 2.51998s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 67.3543px;
            height: 51.7681px;
            --droplet-move-x: 152.2344747266966px;
            --droplet-move-y: 278.9673508785783px;
            --droplet-flow-x: 120.6615286227165px;
            --droplet-flow-y: 235.48815717317592px;
            --droplet-angle: 172.8762486466491deg;
            animation: 1.1391s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              5.91729s ease-in-out 1.9391s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 76.4537px;
            height: 63.1699px;
            --droplet-move-x: -429.1932617064203px;
            --droplet-move-y: -142.17521130078904px;
            --droplet-flow-x: -388.7739032296014px;
            --droplet-flow-y: -133.06444765561957px;
            --droplet-angle: 28.661634304203837deg;
            animation: 1.31034s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.43102s ease-in-out 2.11034s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 33.1064px;
            height: 31.7863px;
            --droplet-move-x: 356.2157685871811px;
            --droplet-move-y: -99.8764552443629px;
            --droplet-flow-x: 335.7218182848121px;
            --droplet-flow-y: -80.69343088262403px;
            --droplet-angle: 174.88337405884351deg;
            animation: 1.81854s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.95562s ease-in-out 2.61854s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 83.6175px;
            height: 75.156px;
            --droplet-move-x: 221.26243207871198px;
            --droplet-move-y: -121.69650250590325px;
            --droplet-flow-x: 259.78365057950367px;
            --droplet-flow-y: -105.75470251305818px;
            --droplet-angle: 66.90371973723548deg;
            animation: 1.82622s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.97865s ease-in-out 2.62622s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 81.1015px;
            height: 74.7278px;
            --droplet-move-x: 521.3857164165287px;
            --droplet-move-y: 210.83750953667715px;
            --droplet-flow-x: 478.2965789983563px;
            --droplet-flow-y: 196.8015875054596px;
            --droplet-angle: 78.3270917782059deg;
            animation: 1.73359s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.70078s ease-in-out 2.53359s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 157.476px;
            height: 140.761px;
            --droplet-move-x: 573.484634154414px;
            --droplet-move-y: 190.51123699065877px;
            --droplet-flow-x: 583.3750670684027px;
            --droplet-flow-y: 188.7473822150055px;
            --droplet-angle: 47.66235757050328deg;
            animation: 1.67512s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.52537s ease-in-out 2.47512s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 202.768px;
            height: 164.345px;
            --droplet-move-x: -573.6276510000224px;
            --droplet-move-y: -270.30745054529933px;
            --droplet-flow-x: -579.2415583882283px;
            --droplet-flow-y: -237.2566687655044px;
            --droplet-angle: 49.743113472301154deg;
            animation: 1.56174s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.18522s ease-in-out 2.36174s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 124.293px;
            height: 97.8175px;
            --droplet-move-x: -187.3698159147926px;
            --droplet-move-y: -255.11657257895945px;
            --droplet-flow-x: -146.61186672356052px;
            --droplet-flow-y: -244.57336503318368px;
            --droplet-angle: 101.40685164859147deg;
            animation: 1.95752s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              8.37257s ease-in-out 2.75752s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 42.5065px;
            height: 34.9831px;
            --droplet-move-x: -315.4917033209392px;
            --droplet-move-y: 175.94643950259547px;
            --droplet-flow-x: -310.2187063387047px;
            --droplet-flow-y: 168.02508181408504px;
            --droplet-angle: 86.87323087767825deg;
            animation: 1.71561s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.64684s ease-in-out 2.51561s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 143.548px;
            height: 108.737px;
            --droplet-move-x: 346.7472699669425px;
            --droplet-move-y: -319.7478565832757px;
            --droplet-flow-x: 342.18845243185444px;
            --droplet-flow-y: -276.5025585199926px;
            --droplet-angle: 29.675088103927457deg;
            animation: 1.69877s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.59631s ease-in-out 2.49877s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 53.9724px;
            height: 41.0714px;
            --droplet-move-x: -16.83934840825729px;
            --droplet-move-y: -106.47914365006356px;
            --droplet-flow-x: -43.268726110319086px;
            --droplet-flow-y: -69.8006447039197px;
            --droplet-angle: 31.64796178830635deg;
            animation: 1.70491s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.61473s ease-in-out 2.50491s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 64.005px;
            height: 63.7079px;
            --droplet-move-x: 162.93547050249768px;
            --droplet-move-y: 98.78303256289063px;
            --droplet-flow-x: 168.65994290017505px;
            --droplet-flow-y: 88.27294901614204px;
            --droplet-angle: 105.50033300981556deg;
            animation: 1.62116s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.36348s ease-in-out 2.42116s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 174.735px;
            height: 147.346px;
            --droplet-move-x: 577.3347137787188px;
            --droplet-move-y: 227.81580391745328px;
            --droplet-flow-x: 607.5524923861419px;
            --droplet-flow-y: 248.63119677646094px;
            --droplet-angle: 117.23585778025789deg;
            animation: 1.5909s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.27271s ease-in-out 2.3909s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 87.9682px;
            height: 74.9061px;
            --droplet-move-x: -143.84290271646623px;
            --droplet-move-y: -157.64439956361412px;
            --droplet-flow-x: -182.03868913918618px;
            --droplet-flow-y: -137.52600918136253px;
            --droplet-angle: 28.51132482579977deg;
            animation: 1.57641s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.22923s ease-in-out 2.37641s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 26.3249px;
            height: 26.1201px;
            --droplet-move-x: 344.8199841248969px;
            --droplet-move-y: 108.34237143672406px;
            --droplet-flow-x: 366.5669992178568px;
            --droplet-flow-y: 152.70065933807524px;
            --droplet-angle: 91.2279272268092deg;
            animation: 1.5369s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.11071s ease-in-out 2.3369s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 41.2787px;
            height: 36.3724px;
            --droplet-move-x: -181.9435146101272px;
            --droplet-move-y: -23.796441685375548px;
            --droplet-flow-x: -230.14873329280903px;
            --droplet-flow-y: -31.09283558708662px;
            --droplet-angle: 84.4933606411428deg;
            animation: 1.48959s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.96877s ease-in-out 2.28959s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 59.4888px;
            height: 53.5166px;
            --droplet-move-x: -362.11555821874447px;
            --droplet-move-y: 320.8063800409121px;
            --droplet-flow-x: -327.11389863056206px;
            --droplet-flow-y: 284.08908543346695px;
            --droplet-angle: 114.47328594942645deg;
            animation: 1.50063s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.0019s ease-in-out 2.30063s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 122.55px;
            height: 108.6px;
            --droplet-move-x: 244.3557027494311px;
            --droplet-move-y: -200.5319462656402px;
            --droplet-flow-x: 285.1231149465342px;
            --droplet-flow-y: -190.4048036846504px;
            --droplet-angle: 4.64313550964045deg;
            animation: 1.72302s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.66907s ease-in-out 2.52302s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 79.3523px;
            height: 70.3653px;
            --droplet-move-x: 513.8518582950906px;
            --droplet-move-y: -60.49442805832046px;
            --droplet-flow-x: 506.448627189744px;
            --droplet-flow-y: -98.52482823281491px;
            --droplet-angle: 144.68186840602297deg;
            animation: 1.23695s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.21084s ease-in-out 2.03695s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 145.144px;
            height: 127.903px;
            --droplet-move-x: -154.83704006713725px;
            --droplet-move-y: 165.89227560077094px;
            --droplet-flow-x: -159.6660106952749px;
            --droplet-flow-y: 213.00809270664087px;
            --droplet-angle: 103.65551852124861deg;
            animation: 1.41323s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.73969s ease-in-out 2.21323s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 47.7139px;
            height: 39.96px;
            --droplet-move-x: -577.5166690458362px;
            --droplet-move-y: -330.5139791501531px;
            --droplet-flow-x: -548.7929907564453px;
            --droplet-flow-y: -346.58842714984104px;
            --droplet-angle: 137.66256285701644deg;
            animation: 1.98318s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              8.44955s ease-in-out 2.78318s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 82.7716px;
            height: 69.44px;
            --droplet-move-x: -13.112758625122261px;
            --droplet-move-y: -304.38169418619356px;
            --droplet-flow-x: -9.934354216790567px;
            --droplet-flow-y: -350.9883351057284px;
            --droplet-angle: 99.80468278678964deg;
            animation: 1.59888s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.29663s ease-in-out 2.39888s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 100.085px;
            height: 84.511px;
            --droplet-move-x: -278.17059790232344px;
            --droplet-move-y: -139.10823719257607px;
            --droplet-flow-x: -277.748482855069px;
            --droplet-flow-y: -98.89649745189433px;
            --droplet-angle: 89.29454870117335deg;
            animation: 1.04205s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              5.62615s ease-in-out 1.84205s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 30.8248px;
            height: 29.7294px;
            --droplet-move-x: 81.1592685278121px;
            --droplet-move-y: -252.72973087158866px;
            --droplet-flow-x: 122.86813515513948px;
            --droplet-flow-y: -249.87726398099787px;
            --droplet-angle: 52.44920798107deg;
            animation: 1.72249s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.66748s ease-in-out 2.52249s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-1"
          css={`
            width: 42.5492px;
            height: 36.3276px;
            --droplet-move-x: -5.158140558058858px;
            --droplet-move-y: 98.3154943682207px;
            --droplet-flow-x: -39.8598578154618px;
            --droplet-flow-y: 143.7813267072189px;
            --droplet-angle: 30.628365779065426deg;
            animation: 1.44584s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.83752s ease-in-out 2.24584s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 168.873px;
            height: 139.079px;
            --droplet-move-x: -475.5160164725306px;
            --droplet-move-y: -322.181101996997px;
            --droplet-flow-x: -455.4315077167604px;
            --droplet-flow-y: -346.58357457947153px;
            --droplet-angle: 57.10903700746291deg;
            animation: 1.71437s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.64311s ease-in-out 2.51437s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 38.6606px;
            height: 32.766px;
            --droplet-move-x: -397.1799520034156px;
            --droplet-move-y: 272.4273271501889px;
            --droplet-flow-x: -373.8141050690353px;
            --droplet-flow-y: 319.65044947674164px;
            --droplet-angle: 38.07918462989933deg;
            animation: 1.41723s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.7517s ease-in-out 2.21723s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 79.4588px;
            height: 65.8513px;
            --droplet-move-x: 3.190958444593565px;
            --droplet-move-y: -321.76310406037516px;
            --droplet-flow-x: 50.37504920785622px;
            --droplet-flow-y: -303.61533414677194px;
            --droplet-angle: 109.59553801030796deg;
            animation: 1.05326s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              5.65979s ease-in-out 1.85326s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 35.6433px;
            height: 30.9826px;
            --droplet-move-x: 470.36272855982486px;
            --droplet-move-y: 260.7845843942121px;
            --droplet-flow-x: 494.7268006607368px;
            --droplet-flow-y: 272.4450050455289px;
            --droplet-angle: 28.004930530342705deg;
            animation: 1.83606s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              8.00818s ease-in-out 2.63606s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 32.0824px;
            height: 31.0413px;
            --droplet-move-x: -182.43010036041463px;
            --droplet-move-y: 275.5067729667352px;
            --droplet-flow-x: -201.4234807073458px;
            --droplet-flow-y: 263.560857011455px;
            --droplet-angle: 7.432401247676472deg;
            animation: 1.38793s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.66379s ease-in-out 2.18793s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 80.2655px;
            height: 60.6868px;
            --droplet-move-x: 123.3343362589134px;
            --droplet-move-y: -245.50180597823393px;
            --droplet-flow-x: 97.08541089988533px;
            --droplet-flow-y: -277.21495521358406px;
            --droplet-angle: 50.517387872694854deg;
            animation: 1.18264s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.04791s ease-in-out 1.98264s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 154.254px;
            height: 149.365px;
            --droplet-move-x: 567.7260046004824px;
            --droplet-move-y: -115.1279613834356px;
            --droplet-flow-x: 599.0003406274636px;
            --droplet-flow-y: -135.98283077335594px;
            --droplet-angle: 12.748278694900359deg;
            animation: 1.86948s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              8.10843s ease-in-out 2.66948s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 67.2955px;
            height: 60.0098px;
            --droplet-move-x: -33.66314046050222px;
            --droplet-move-y: -367.13770959936016px;
            --droplet-flow-x: 8.433671865277404px;
            --droplet-flow-y: -408.8376318409076px;
            --droplet-angle: 73.41327216798712deg;
            animation: 1.59752s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.29256s ease-in-out 2.39752s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 91.6838px;
            height: 82.366px;
            --droplet-move-x: 5.593203500575929px;
            --droplet-move-y: 12.455028576800132px;
            --droplet-flow-x: -11.55017335103513px;
            --droplet-flow-y: -33.29281564763005px;
            --droplet-angle: 98.01870421477602deg;
            animation: 1.76845s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.80536s ease-in-out 2.56845s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 87.5483px;
            height: 82.2881px;
            --droplet-move-x: -369.36150159536726px;
            --droplet-move-y: 359.20569524444875px;
            --droplet-flow-x: -363.03553825904964px;
            --droplet-flow-y: 361.38258722417px;
            --droplet-angle: 112.26632286160233deg;
            animation: 1.48513s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.9554s ease-in-out 2.28513s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 74.6403px;
            height: 69.6166px;
            --droplet-move-x: 236.2474920279721px;
            --droplet-move-y: -92.62804875413893px;
            --droplet-flow-x: 210.28532917689347px;
            --droplet-flow-y: -104.64782321164971px;
            --droplet-angle: 89.60095427367642deg;
            animation: 1.52059s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.06178s ease-in-out 2.32059s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 192.107px;
            height: 145.967px;
            --droplet-move-x: 234.07481001608429px;
            --droplet-move-y: 88.3250726684087px;
            --droplet-flow-x: 274.64998996297226px;
            --droplet-flow-y: 137.6056986134825px;
            --droplet-angle: 74.4103863181115deg;
            animation: 1.40686s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.72057s ease-in-out 2.20686s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 208.526px;
            height: 157.222px;
            --droplet-move-x: 534.123560010427px;
            --droplet-move-y: 30.26381347795377px;
            --droplet-flow-x: 530.2691664818515px;
            --droplet-flow-y: 66.86764729709562px;
            --droplet-angle: 94.80781693621171deg;
            animation: 1.53725s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.11175s ease-in-out 2.33725s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 38.4262px;
            height: 37.9032px;
            --droplet-move-x: 90.80888911209176px;
            --droplet-move-y: -309.01101492937045px;
            --droplet-flow-x: 47.48422286426699px;
            --droplet-flow-y: -355.15856338543506px;
            --droplet-angle: 25.064732889929175deg;
            animation: 1.68604s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.55812s ease-in-out 2.48604s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 106.63px;
            height: 104.364px;
            --droplet-move-x: 432.6108467597113px;
            --droplet-move-y: 128.69080145942107px;
            --droplet-flow-x: 452.5834185749974px;
            --droplet-flow-y: 177.85281840535083px;
            --droplet-angle: 34.102178117652315deg;
            animation: 1.74349s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.73048s ease-in-out 2.54349s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 154.818px;
            height: 141.211px;
            --droplet-move-x: 281.95392098269446px;
            --droplet-move-y: -44.325556137071864px;
            --droplet-flow-x: 269.30954151642044px;
            --droplet-flow-y: -49.81937144533438px;
            --droplet-angle: 45.903599498651445deg;
            animation: 1.34268s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.52803s ease-in-out 2.14268s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 60.7812px;
            height: 53.0942px;
            --droplet-move-x: 78.0962568115237px;
            --droplet-move-y: -154.48437188496183px;
            --droplet-flow-x: 47.31330591932166px;
            --droplet-flow-y: -172.87597566220677px;
            --droplet-angle: 136.03287719288755deg;
            animation: 1.91379s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              8.24138s ease-in-out 2.71379s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 64.7865px;
            height: 58.9546px;
            --droplet-move-x: -439.9757210269519px;
            --droplet-move-y: -364.89803486264174px;
            --droplet-flow-x: -442.76176856723833px;
            --droplet-flow-y: -402.6561898162463px;
            --droplet-angle: 86.36679642441827deg;
            animation: 1.42278s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.76833s ease-in-out 2.22278s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 59.8733px;
            height: 58.6202px;
            --droplet-move-x: 149.73628439956408px;
            --droplet-move-y: 350.1763244192653px;
            --droplet-flow-x: 164.7360786783442px;
            --droplet-flow-y: 379.28944552759236px;
            --droplet-angle: 34.99749537545807deg;
            animation: 1.77752s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.83255s ease-in-out 2.57752s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 128.149px;
            height: 105.136px;
            --droplet-move-x: 51.430173844442216px;
            --droplet-move-y: 142.60476183363673px;
            --droplet-flow-x: 7.712481590779085px;
            --droplet-flow-y: 126.48278977850103px;
            --droplet-angle: 63.293468411264776deg;
            animation: 1.40918s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.72754s ease-in-out 2.20918s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 125.161px;
            height: 93.1538px;
            --droplet-move-x: 377.9193679617751px;
            --droplet-move-y: 347.44242287504005px;
            --droplet-flow-x: 390.31350693067316px;
            --droplet-flow-y: 354.74740105378083px;
            --droplet-angle: 132.26520322484808deg;
            animation: 1.20803s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.12408s ease-in-out 2.00803s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 143.632px;
            height: 114.676px;
            --droplet-move-x: 126.43428764597539px;
            --droplet-move-y: 109.31181702813358px;
            --droplet-flow-x: 94.09999662240972px;
            --droplet-flow-y: 159.28414220696533px;
            --droplet-angle: 172.0358976145338deg;
            animation: 1.12014s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              5.86042s ease-in-out 1.92014s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 43.9259px;
            height: 43.5767px;
            --droplet-move-x: 550.8496263961084px;
            --droplet-move-y: 295.89174105011006px;
            --droplet-flow-x: 532.0172566184505px;
            --droplet-flow-y: 261.80448257504656px;
            --droplet-angle: 66.66897547185336deg;
            animation: 1.07649s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              5.72946s ease-in-out 1.87649s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 75.8315px;
            height: 59.2254px;
            --droplet-move-x: -209.54938592032676px;
            --droplet-move-y: 32.31261211120629px;
            --droplet-flow-x: -161.32092976935334px;
            --droplet-flow-y: 48.205783505549704px;
            --droplet-angle: 42.12715466059264deg;
            animation: 1.26673s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.30019s ease-in-out 2.06673s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 52.6703px;
            height: 41.2242px;
            --droplet-move-x: -160.17658644457617px;
            --droplet-move-y: 370.6765900586689px;
            --droplet-flow-x: -175.10278178707637px;
            --droplet-flow-y: 358.9573735540788px;
            --droplet-angle: 20.829862433695922deg;
            animation: 1.39753s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.6926s ease-in-out 2.19753s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 123.019px;
            height: 108.981px;
            --droplet-move-x: -356.59120908555377px;
            --droplet-move-y: -291.2602111400647px;
            --droplet-flow-x: -324.8120153589749px;
            --droplet-flow-y: -251.47845998875397px;
            --droplet-angle: 25.17722900501888deg;
            animation: 1.91194s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              8.23582s ease-in-out 2.71194s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 47.7232px;
            height: 36.5112px;
            --droplet-move-x: -398.40215129221707px;
            --droplet-move-y: 4.755470270166368px;
            --droplet-flow-x: -377.84628414353733px;
            --droplet-flow-y: -10.400412302141655px;
            --droplet-angle: 168.03518210169588deg;
            animation: 1.16925s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.00774s ease-in-out 1.96925s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 148.764px;
            height: 143.259px;
            --droplet-move-x: -156.88032376796633px;
            --droplet-move-y: -176.51277926935092px;
            --droplet-flow-x: -167.90664074855766px;
            --droplet-flow-y: -151.9821226977278px;
            --droplet-angle: 130.59886984388368deg;
            animation: 1.45858s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.87573s ease-in-out 2.25858s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 95.131px;
            height: 73.0573px;
            --droplet-move-x: -193.73579001808656px;
            --droplet-move-y: 144.63562743145488px;
            --droplet-flow-x: -238.715446870219px;
            --droplet-flow-y: 119.16077527427883px;
            --droplet-angle: 18.22678234998933deg;
            animation: 1.71898s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              7.65694s ease-in-out 2.51898s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 48.2567px;
            height: 47.5681px;
            --droplet-move-x: 429.57848997339835px;
            --droplet-move-y: 140.64910396416664px;
            --droplet-flow-x: 410.14775874591106px;
            --droplet-flow-y: 97.53380923884781px;
            --droplet-angle: 137.76778007050805deg;
            animation: 1.97104s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              8.41312s ease-in-out 2.77104s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
        <Droplet
          className="lava droplet group-2"
          css={`
            width: 178.184px;
            height: 160.749px;
            --droplet-move-x: 225.63766513848665px;
            --droplet-move-y: -85.23887538746185px;
            --droplet-flow-x: 269.9564619341333px;
            --droplet-flow-y: -114.07753793251271px;
            --droplet-angle: 136.01845605882107deg;
            animation: 1.19447s cubic-bezier(0.25, 1, 1, 1) 0.8s 1 normal
                forwards running explode,
              6.0834s ease-in-out 1.99447s infinite normal none running
                explode-breathe;
            opacity: 1;
          `}
        />
      </div>
    </div>
  );
};

export default LavaBlobs;
