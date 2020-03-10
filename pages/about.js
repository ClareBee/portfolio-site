import dynamic from 'next/dynamic';
import Layout from '../components/Layout';
import PageTitle from '../components/PageTitle';
const GsapWrapper = dynamic(
  () => import('../components/gsapwrapper'),
  {
    ssr: false,
  },
);

export default function About() {
  return (
    <Layout title="About">
      <PageTitle title="About" subtitle="" />
      <GsapWrapper>
        <div className="draggable-container">
          <svg
            viewBox="0 0 811 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle
              cx="15"
              cy="30"
              r="15"
              fill="#da2497"
              id="dragNavigator"
            />
            <line
              x1="39.9674"
              y1="29.5"
              x2="806.033"
              y2="29.5"
              stroke="#373f51"
            />
            {/* 16 */}
            <circle
              id="circle-16"
              className="circle"
              cx="735"
              cy="30"
              r="5"
              fill="#333333"
            />
            <circle
              id="circle-2"
              className="circle"
              cx="91"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 8 */}
            <circle
              id="circle-8"
              className="circle"
              cx="367"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 15 */}
            <circle
              id="circle-15"
              className="circle"
              cx="689"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 6 */}
            <circle
              id="circle-6"
              className="circle"
              cx="274.58"
              cy="30.387"
              r="5"
              transform="rotate(4.62657 274.58 30.387)"
              fill="#333333"
            />
            {/* 13 */}
            <circle
              id="circle-13"
              className="circle"
              cx="597"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 12 */}
            <circle
              id="circle-12"
              className="circle"
              cx="551"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 11 */}
            <circle
              id="circle-11"
              className="circle"
              cx="505"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 10 */}
            <circle
              id="circle-10"
              className="circle"
              cx="459"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 9 */}
            <circle
              id="circle-9"
              className="circle"
              cx="413"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 14 */}
            <circle
              id="circle-14"
              className="circle"
              cx="643"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 7 */}
            <circle
              id="circle-7"
              className="circle"
              cx="321"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 3 */}
            <circle
              id="circle-3"
              className="circle"
              cx="137"
              cy="30"
              r="5"
              fill="#333333"
            />

            <circle
              id="circle-1"
              className="circle"
              cx="45"
              cy="30"
              r="5"
              fill="#333333"
            />
            <circle
              // 4
              id="circle-4"
              className="circle"
              cx="183"
              cy="30"
              r="5"
              fill="#333333"
            />
            {/* 5 */}
            <circle
              id="circle-5"
              className="circle"
              cx="229"
              cy="30"
              r="5"
              fill="#333333"
            />
            <path
              d="M775.684 15H770.615V14.2324L773.117 11.8125C773.52 11.4453 773.811 11.127 773.99 10.8574C774.174 10.584 774.266 10.3203 774.266 10.0664C774.266 9.74609 774.152 9.48438 773.926 9.28125C773.699 9.07422 773.402 8.9707 773.035 8.9707C772.562 8.9707 772.195 9.08008 771.934 9.29883C771.676 9.51758 771.547 9.83594 771.547 10.2539H770.457C770.457 9.60938 770.695 9.08594 771.172 8.68359C771.652 8.28125 772.273 8.08008 773.035 8.08008C773.746 8.08008 774.311 8.26172 774.728 8.625C775.146 8.98828 775.355 9.46094 775.355 10.043C775.355 10.3594 775.258 10.6875 775.062 11.0273C774.871 11.3672 774.473 11.8516 773.867 12.4805L771.945 14.1152H775.684V15ZM781.596 12.0879C781.596 13.0566 781.385 13.8008 780.963 14.3203C780.541 14.8359 779.934 15.0938 779.141 15.0938C778.355 15.0938 777.75 14.8398 777.324 14.332C776.898 13.8203 776.682 13.0879 776.674 12.1348V11.0684C776.674 10.0957 776.885 9.35547 777.307 8.84766C777.732 8.33594 778.34 8.08008 779.129 8.08008C779.922 8.08008 780.527 8.33203 780.945 8.83594C781.367 9.33984 781.584 10.0586 781.596 10.9922V12.0879ZM780.506 10.9043C780.506 9.61914 780.047 8.97656 779.129 8.97656C778.215 8.97656 777.758 9.62695 777.758 10.9277V12.2461C777.758 12.8984 777.877 13.3887 778.115 13.7168C778.353 14.0449 778.695 14.209 779.141 14.209C780.051 14.209 780.506 13.5469 780.506 12.2227V10.9043ZM787.871 15H782.803V14.2324L785.305 11.8125C785.707 11.4453 785.998 11.127 786.178 10.8574C786.361 10.584 786.453 10.3203 786.453 10.0664C786.453 9.74609 786.34 9.48438 786.113 9.28125C785.887 9.07422 785.59 8.9707 785.223 8.9707C784.75 8.9707 784.383 9.08008 784.121 9.29883C783.863 9.51758 783.734 9.83594 783.734 10.2539H782.645C782.645 9.60938 782.883 9.08594 783.359 8.68359C783.84 8.28125 784.461 8.08008 785.223 8.08008C785.934 8.08008 786.498 8.26172 786.916 8.625C787.334 8.98828 787.543 9.46094 787.543 10.043C787.543 10.3594 787.445 10.6875 787.25 11.0273C787.059 11.3672 786.66 11.8516 786.055 12.4805L784.133 14.1152H787.871V15ZM793.783 12.0879C793.783 13.0566 793.572 13.8008 793.15 14.3203C792.728 14.8359 792.121 15.0938 791.328 15.0938C790.543 15.0938 789.937 14.8398 789.512 14.332C789.086 13.8203 788.869 13.0879 788.861 12.1348V11.0684C788.861 10.0957 789.072 9.35547 789.494 8.84766C789.92 8.33594 790.527 8.08008 791.316 8.08008C792.109 8.08008 792.715 8.33203 793.133 8.83594C793.555 9.33984 793.771 10.0586 793.783 10.9922V12.0879ZM792.693 10.9043C792.693 9.61914 792.234 8.97656 791.316 8.97656C790.402 8.97656 789.945 9.62695 789.945 10.9277V12.2461C789.945 12.8984 790.064 13.3887 790.303 13.7168C790.541 14.0449 790.883 14.209 791.328 14.209C792.238 14.209 792.693 13.5469 792.693 12.2227V10.9043Z"
              fill="black"
            />
          </svg>
        </div>

        <div className="svg-container">
          <svg
            id="timelineSVG"
            viewBox="0 0 940 846"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="path"
              d="M23.4171 82.7012C120.133 203.537 243.723 135.238 293.85 186.582C343.977 237.925 61.582 336.418 67.058 396.716C72.5341 457.015 578.499 94.0149 612.299 180.938C646.099 267.862 210.754 502.832 154.842 584.79C98.9307 666.748 822.496 284.806 853.921 344.193C885.345 403.58 378.097 684.491 399.158 743.596C420.22 802.7 767.296 519.486 831.766 584.79C896.236 650.094 678.031 646.845 671.645 703.152C665.258 759.458 737 743.596 780.215 752.961C823.43 762.326 841 763 892 840"
              stroke="black"
              strokeWidth="2"
            />
            <rect
              id="rect-3"
              width="68.2977"
              height="90.1963"
              rx="3"
              transform="matrix(0.96206 0.272839 -0.264341 0.964429 254.278 67.9773)"
              fill="url(#pattern0)"
            />
            <rect
              id="rect-1"
              width="71.7503"
              height="97.3901"
              rx="3"
              transform="matrix(0.995972 -0.0896616 0.0867334 0.996232 136.348 185.754)"
              fill="url(#pattern1)"
            />
            <rect
              width="118.111"
              height="76.6576"
              rx="3"
              transform="matrix(0.996739 0.080691 -0.0780588 0.996949 520.896 308.011)"
              fill="url(#pattern2)"
            />
            <rect
              width="109.957"
              height="74.248"
              rx="3"
              transform="matrix(0.996019 0.0891385 -0.0860884 0.996288 389.645 511.914)"
              fill="url(#pattern3)"
            />
            <rect
              width="128.124"
              height="83.3251"
              rx="3"
              transform="matrix(0.997767 -0.0667898 0.0651703 0.997874 616.295 762.411)"
              fill="url(#pattern4)"
            />
            <rect
              id="rect"
              width="110.566"
              height="69.4214"
              rx="3"
              transform="matrix(0.998538 -0.0540587 0.0522424 0.998634 613.624 114.804)"
              fill="url(#pattern5)"
            />
            <rect
              width="110.588"
              height="81.3313"
              rx="3"
              transform="matrix(0.992586 0.121541 -0.117573 0.993064 772.326 444.543)"
              fill="url(#pattern6)"
            />
            <rect
              width="81.6768"
              height="96.2431"
              rx="3"
              transform="matrix(0.995295 -0.0968863 0.0936949 0.995601 102.894 604.668)"
              fill="url(#pattern7)"
            />
            <rect
              width="113.936"
              height="80.9072"
              rx="3"
              transform="matrix(0.993322 -0.115372 0.11149 0.993766 730.36 262.786)"
              fill="url(#pattern8)"
            />
            <rect
              width="112.663"
              height="74.1046"
              rx="3"
              transform="matrix(0.997763 0.0668455 -0.0646467 0.997908 807.175 641.858)"
              fill="url(#pattern9)"
            />
            <rect
              id="rect-2"
              width="95.1287"
              height="66.1454"
              rx="3"
              transform="matrix(0.994764 0.102199 -0.0987638 0.995111 10.7904 140.089)"
              fill="url(#pattern10)"
            />
            <rect
              id="rect-6"
              width="113.079"
              height="74.9583"
              rx="3"
              transform="matrix(0.998583 -0.0532243 0.0514623 0.998675 253.395 322.708)"
              fill="url(#pattern11)"
            />
            <rect
              id="rect-7"
              width="92.567"
              height="89.0036"
              rx="3"
              transform="matrix(0.995319 0.0966452 -0.0934617 0.995623 386.938 103.114)"
              fill="url(#pattern12)"
            />
            <rect
              width="110.988"
              height="80.9185"
              rx="3"
              transform="matrix(0.997654 -0.0684582 0.0662059 0.997806 282.644 709.646)"
              fill="url(#pattern13)"
            />
            <rect
              id="rect-5"
              width="102.617"
              height="70.6936"
              rx="3"
              transform="matrix(0.996065 0.0886277 -0.0857078 0.99632 16.7031 400.458)"
              fill="url(#pattern14)"
            />
            <text x="125" y="31" fill="black">
              GIGGLESWICK
            </text>
            <text x="10" y="128" fill="black">
              OXFORD
            </text>
            <text x="314" y="83" fill="black">
              PARIS
            </text>
            <text x="88" y="265" fill="black">
              BOLOGNA
            </text>
            <text x="12" y="392" fill="black">
              LONDON
            </text>
            <text x="207" y="393" fill="black">
              CANADA
            </text>
            <text x="484" y="143" fill="black">
              JAPAN
            </text>
            <text x="584" y="302" fill="black">
              VIETNAM
            </text>
            <text x="744" y="143" fill="black">
              NEPAL
            </text>
            <text x="481" y="502" fill="black">
              MYANMAR
            </text>
            <text x="106" y="586" fill="black">
              INDIA
            </text>
            <text x="864" y="306" fill="black">
              CAMBODIA
            </text>
            <text x="355" y="684" fill="black">
              TAIWAN
            </text>
            <text x="819" y="436" fill="black">
              THAILAND
            </text>
            <text x="848" y="635" fill="black">
              NEW ZEALAND
            </text>
            <text x="615" y="748" fill="black">
              GLASGOW
            </text>

            <ellipse
              id="ellipse-8"
              cx="613.032"
              cy="189.831"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-3"
              cx="271.356"
              cy="172.502"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-4"
              cx="198.976"
              cy="286.197"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-5"
              cx="99.9851"
              cy="398.813"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-7"
              cx="468.272"
              cy="206.081"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-2"
              cx="104.82"
              cy="144.769"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-1"
              cx="23.1559"
              cy="83.0098"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-10"
              cx="184.39"
              cy="591.782"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-15"
              cx="805.691"
              cy="638.108"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-14"
              cx="408.665"
              cy="718.25"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-16"
              cx="745.188"
              cy="750.259"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-11"
              cx="386.312"
              cy="510.349"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-13"
              cx="768.437"
              cy="443.216"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-12"
              cx="820.593"
              cy="339.266"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-9"
              cx="519.364"
              cy="305.686"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <ellipse
              id="ellipse-6"
              cx="250.067"
              cy="321.936"
              rx="4.1879"
              ry="4.25919"
              fill="#DA2497"
            />
            <rect
              id="rect-1"
              width="108.048"
              height="75.8135"
              rx="3"
              fill="url(#pattern15)"
            />
            <defs>
              <pattern
                id="pattern0"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-3"
                  transform="translate(0 -0.0107765) scale(0.00225225 0.00170543)"
                />
              </pattern>
              <pattern
                id="pattern1"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-4"
                  transform="translate(-0.0699046) scale(0.00226602 0.00166945)"
                />
              </pattern>
              <pattern
                id="pattern2"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  // 9
                  xlinkHref="#image-9"
                  transform="translate(0 -0.0132665) scale(0.00125 0.00192595)"
                />
              </pattern>
              <pattern
                id="pattern3"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-11"
                  transform="translate(0 -0.0502922) scale(0.000976562 0.00144623)"
                />
              </pattern>
              <pattern
                id="pattern4"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-16"
                  transform="translate(0 -0.0765672) scale(0.000245399 0.000377335)"
                />
              </pattern>
              <pattern
                id="pattern5"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-8"
                  transform="translate(0 -0.296339) scale(0.000769231 0.00122514)"
                />
              </pattern>
              <pattern
                id="pattern6"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-13"
                  transform="translate(-0.0082669) scale(0.00385051 0.0052356)"
                />
              </pattern>
              <pattern
                id="pattern7"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-10"
                  transform="translate(0 -0.0657675) scale(0.000333333)"
                />
              </pattern>
              <pattern
                id="pattern8"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-12"
                  transform="translate(-0.0325821) scale(0.000693466 0.000976562)"
                />
              </pattern>
              <pattern
                id="pattern9"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-15"
                  transform="translate(-0.0861361) scale(0.00114592 0.00174216)"
                />
              </pattern>
              <pattern
                id="pattern10"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-2"
                  transform="translate(0 -0.0273314) scale(0.00416667 0.0059924)"
                />
              </pattern>
              <pattern
                id="pattern11"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-6"
                  transform="translate(-0.00281156) scale(0.000982054 0.00148148)"
                />
              </pattern>
              <pattern
                id="pattern12"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-7"
                  transform="translate(0 -0.0960208) scale(0.0010989)"
                />
              </pattern>
              <pattern
                id="pattern13"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-14"
                  transform="translate(-0.00843401) scale(0.00383724 0.00526316)"
                />
              </pattern>
              <pattern
                id="pattern14"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-5"
                  transform="translate(-0.188908) scale(0.00172227 0.0025)"
                />
              </pattern>
              <pattern
                id="pattern15"
                patternContentUnits="objectBoundingBox"
                width="1"
                height="1"
              >
                <use
                  xlinkHref="#image-1"
                  transform="translate(-0.0301288) scale(0.001724 0.002457)"
                />
              </pattern>
              <image
                id="image-3"
                width="444"
                height="599"
                href={require('../images/paris.png')}
              />
              <image
                id="image-4"
                width="503"
                height="599"
                href={require('../images/bologna.png')}
              />
              <image
                id="image-9"
                width="800"
                height="533"
                href={require('../images/hanoi.png')}
              />
              <image
                id="image-11"
                width="1024"
                height="761"
                href={require('../images/myanmar.png')}
              />
              <image
                id="image-16"
                width="4075"
                height="3056"
                href={require('../images/glasgow.png')}
              />
              <image
                id="image-8"
                width="1300"
                height="1300"
                href={require('../images/nepal.png')}
              />
              <image
                id="image-13"
                width="264"
                height="191"
                href={require('../images/chiangmai.png')}
              />
              <image
                id="image-10"
                width="3000"
                height="4000"
                href={require('../images/india.png')}
              />
              <image
                id="image-12"
                width="1536"
                height="1024"
                href={require('../images/cambodia.png')}
              />
              <image
                id="image-15"
                width="1023"
                height="574"
                href={require('../images/newzealand.png')}
              />
              <image
                id="image-2"
                width="240"
                height="176"
                href={require('../images/oxford.png')}
              />
              <image
                id="image-6"
                width="1024"
                height="675"
                href={require('../images/canada.png')}
              />
              <image
                id="image-7"
                width="910"
                height="1043"
                href={require('../images/japan.png')}
              />
              {/* check with hanoi  */}
              <image
                id="image-14"
                width="265"
                height="190"
                href={require('../images/tainan.png')}
              />
              <image
                id="image-5"
                width="800"
                height="400"
                href={require('../images/london.png')}
              />
              <image
                id="image-1"
                width="615"
                height="407"
                href={require('../images/giggleswick.png')}
              />
            </defs>
          </svg>
        </div>
        <div id="navigator"></div>
      </GsapWrapper>
    </Layout>
  );
}
