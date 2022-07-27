import "./Contact.css";
import { useState } from "react";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

const Contact = () => {
  const [emailFocused, setEmailFocused] = useState(false);
  const [nameFocused, setNameFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  return (
    <section className="section" id="contact-section">
      <h2 className="section-title contact-h2">Lets Chat!</h2>
      {/****************
       **     Form    **
       ****************/}
      <form action="" id="contact-form" className="container">
        {/****************
         ** Email Input **
         ****************/}
        <div className="input-container">
          <label
            htmlFor="email"
            className={`input-label ${emailFocused ? "active" : ""}`}
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="input focus-link"
            onFocus={() => setEmailFocused(true)}
            onBlur={() => setEmailFocused(false)}
          />
        </div>
        {/****************
         ** Name Input **
         ****************/}
        <div className="input-container">
          <label
            htmlFor="name"
            className={`input-label ${nameFocused ? "active" : ""}`}
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            className="input focus-link"
            onFocus={() => setNameFocused(true)}
            onBlur={() => setNameFocused(false)}
          />
        </div>
        {/******************
         ** Message Input **
         ******************/}
        <div className="input-container">
          <label
            htmlFor="message"
            className={`message-label ${messageFocused ? "active" : ""}`}
          >
            Message
          </label>
          <textarea
            type="text"
            id="message"
            className="input contact-textarea focus-link"
            rows={10}
            onFocus={() => setMessageFocused(true)}
            onBlur={() => setMessageFocused(false)}
          ></textarea>
        </div>
        <button className="contact-btn main-btn">Submit</button>
      </form>
      <div className="contact-socials">
        <a
          href="https://github.com/VictorMtzCode"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/victormartinezjr/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social"
        >
          <AiFillLinkedin />
        </a>
        <a
          href="mailto:victormtzcodes@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-social"
        >
          <AiOutlineMail />
        </a>
      </div>
      {/************************************************
       ******************    SVG     ******************
       ************************************************/}
      <svg
        viewBox="0 0 2174 1242"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="contact-rocket"
      >
        <g id="smoke" clipPath="url(#clip0_218_2)">
          <path
            id="Vector"
            d="M-49.2168 737.912L1622.52 1149.37L2305 835.03C2305 835.03 2317.77 1366.59 2305 1366.59H-115.645L-49.2168 737.912Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_2"
            d="M155.636 878.818C216.532 817.936 216.532 719.228 155.636 658.346C94.7407 597.465 -3.99037 597.465 -64.8859 658.346C-125.781 719.228 -125.781 817.936 -64.8859 878.818C-3.99039 939.699 94.7407 939.699 155.636 878.818Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_3"
            d="M216.624 891.265C253.335 891.265 283.095 861.512 283.095 824.809C283.095 788.107 253.335 758.354 216.624 758.354C179.913 758.354 150.153 788.107 150.153 824.809C150.153 861.512 179.913 891.265 216.624 891.265Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_4"
            d="M440.345 920.738C486.265 874.828 486.265 800.394 440.345 754.485C394.425 708.575 319.974 708.575 274.053 754.485C228.133 800.394 228.133 874.828 274.053 920.738C319.974 966.647 394.425 966.647 440.345 920.738Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_5"
            d="M516.836 891.739C523.485 863.574 506.039 835.354 477.868 828.707C449.697 822.059 421.47 839.502 414.822 867.666C408.173 895.831 425.62 924.051 453.79 930.698C481.961 937.346 510.188 919.903 516.836 891.739Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_6"
            d="M606.434 1003.69C660.773 1003.69 704.824 959.65 704.824 905.323C704.824 850.996 660.773 806.955 606.434 806.955C552.094 806.955 508.043 850.996 508.043 905.323C508.043 959.65 552.094 1003.69 606.434 1003.69Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_7"
            d="M829.141 955.78C835.813 914.685 807.9 875.964 766.796 869.293C725.692 862.623 686.962 890.529 680.289 931.624C673.617 972.718 701.53 1011.44 742.634 1018.11C783.738 1024.78 822.469 996.875 829.141 955.78Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_8"
            d="M1039.43 971.391C1050.51 903.119 1004.14 838.79 935.851 827.708C867.563 816.626 803.219 862.987 792.135 931.259C781.05 999.531 827.422 1063.86 895.71 1074.94C963.997 1086.02 1028.34 1039.66 1039.43 971.391Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_9"
            d="M1225.83 1044.83C1240.1 984.401 1202.66 923.849 1142.22 909.586C1081.77 895.323 1021.21 932.75 1006.94 993.181C992.673 1053.61 1030.11 1114.16 1090.55 1128.43C1151 1142.69 1211.56 1105.26 1225.83 1044.83Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_10"
            d="M1278.57 1071.61C1285.06 1044.14 1268.04 1016.61 1240.57 1010.13C1213.09 1003.65 1185.56 1020.66 1179.08 1048.13C1172.59 1075.6 1189.61 1103.12 1217.08 1109.6C1244.56 1116.09 1272.09 1099.08 1278.57 1071.61Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_11"
            d="M1456.53 1095.15C1467.55 1048.44 1438.62 1001.64 1391.9 990.616C1345.18 979.591 1298.37 1008.52 1287.34 1055.23C1276.32 1101.94 1305.25 1148.74 1351.97 1159.76C1398.69 1170.79 1445.5 1141.86 1456.53 1095.15Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_12"
            d="M1520.25 1205.6C1561.2 1205.6 1594.4 1172.41 1594.4 1131.47C1594.4 1090.53 1561.2 1057.34 1520.25 1057.34C1479.3 1057.34 1446.1 1090.53 1446.1 1131.47C1446.1 1172.41 1479.3 1205.6 1520.25 1205.6Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_13"
            d="M1799.91 1143.49C1810.76 1076.63 1765.35 1013.63 1698.47 1002.78C1631.6 991.927 1568.58 1037.33 1557.73 1104.19C1546.87 1171.05 1592.29 1234.05 1659.16 1244.91C1726.04 1255.76 1789.05 1210.36 1799.91 1143.49Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_14"
            d="M1850.01 1123.79C1888.13 1123.79 1919.03 1092.9 1919.03 1054.79C1919.03 1016.69 1888.13 985.794 1850.01 985.794C1811.9 985.794 1781 1016.69 1781 1054.79C1781 1092.9 1811.9 1123.79 1850.01 1123.79Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_15"
            d="M1967.6 1100.81C2025.49 1100.81 2072.42 1053.89 2072.42 996.015C2072.42 938.139 2025.49 891.222 1967.6 891.222C1909.71 891.222 1862.78 938.139 1862.78 996.015C1862.78 1053.89 1909.71 1100.81 1967.6 1100.81Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_16"
            d="M2288.1 967.959C2299.41 898.3 2252.1 832.664 2182.42 821.357C2112.75 810.05 2047.1 857.353 2035.79 927.012C2024.48 996.671 2071.79 1062.31 2141.47 1073.61C2211.14 1084.92 2276.79 1037.62 2288.1 967.959Z"
            fill="#F2F2F2"
          />
          <path
            id="Vector_17"
            d="M1573.95 622.898C1573.95 622.898 1579.08 985.795 1402.7 1139.1H1711.98C1711.98 1139.1 1627.57 967.079 1609.75 620.311L1573.95 622.855V622.898Z"
            fill="#F2F2F2"
          />
          <g id="rocket">
            <g id="Group">
              <g id="Group_2">
                <path
                  id="Vector_18"
                  d="M1637.27 620.648C1637.27 620.648 1616.3 635.849 1647.88 676.988C1649.36 678.921 1652.24 679.012 1653.83 677.165C1662.37 667.25 1684.52 638.234 1667.38 621.567L1637.27 620.648V620.648Z"
                  fill="#E81818"
                />
                <path
                  id="Vector_19"
                  d="M1641.63 620.692C1641.63 620.692 1626.75 631.478 1649.25 660.687C1650.23 661.966 1652.15 662.025 1653.2 660.804C1659.14 653.943 1675.12 633.211 1662.92 621.343L1641.63 620.692V620.692Z"
                  fill="#E7A900"
                />
                <path
                  id="Vector_20"
                  d="M1645.14 619.668C1645.14 619.668 1635.09 626.946 1650.28 646.655C1650.94 647.517 1652.23 647.558 1652.95 646.734C1656.95 642.104 1667.74 628.116 1659.5 620.106L1645.14 619.667L1645.14 619.668Z"
                  fill="#FFFD01"
                />
                <path
                  id="Vector_21"
                  d="M1668.1 662.389C1664.06 669.174 1659.38 675.077 1655.99 679.022C1654.67 680.551 1652.76 681.394 1650.74 681.338C1648.72 681.279 1646.85 680.327 1645.62 678.719C1632.03 661.019 1626.08 645.626 1627.92 632.967C1629.38 622.959 1635.35 618.528 1635.61 618.343C1636.12 617.974 1636.73 617.783 1637.36 617.803L1667.47 618.722C1668.18 618.744 1668.86 619.03 1669.36 619.527C1681.77 631.595 1676.21 648.771 1668.1 662.389L1668.1 662.389ZM1636.07 626.428C1635.02 628.203 1633.97 630.699 1633.52 634.02C1632.49 641.617 1634.54 654.937 1650.13 675.256C1650.39 675.589 1650.73 675.646 1650.9 675.651C1651.08 675.656 1651.41 675.618 1651.67 675.311C1658.71 667.145 1680.21 639.673 1666.15 624.377L1638.31 623.528C1637.75 624.081 1636.91 625.032 1636.08 626.429L1636.07 626.428Z"
                  fill="#000072"
                />
              </g>
              <path
                id="Vector_22"
                d="M1665.27 602.479C1670.46 609.903 1670.33 618.709 1670.33 618.709C1670.33 618.709 1663.92 622.232 1650.63 622.032C1637.33 621.831 1631.03 618.115 1631.03 618.115C1631.03 618.115 1631.16 609.309 1636.58 602.045"
                fill="#E2E8E8"
              />
              <path
                id="Vector_23"
                d="M1672.88 620.228C1672.62 620.675 1672.23 621.052 1671.76 621.31C1671.47 621.469 1664.5 625.21 1650.58 625.001C1636.66 624.79 1629.81 620.84 1629.52 620.672C1628.6 620.131 1628.05 619.137 1628.06 618.071C1628.07 617.672 1628.28 608.213 1634.21 600.271C1635.19 598.958 1637.05 598.687 1638.36 599.667C1639.68 600.647 1639.94 602.52 1638.96 603.821C1635.62 608.305 1634.52 613.55 1634.17 616.29C1636.69 617.278 1642.14 618.936 1650.67 619.065C1659.19 619.193 1664.7 617.703 1667.25 616.787C1666.98 614.043 1666.04 608.763 1662.84 604.181C1661.9 602.838 1662.22 600.988 1663.56 600.047C1664.91 599.107 1666.76 599.433 1667.7 600.775C1673.38 608.894 1673.31 618.354 1673.3 618.752C1673.29 619.281 1673.14 619.788 1672.88 620.226L1672.88 620.228Z"
                fill="#000072"
              />
              <path
                id="Vector_24"
                d="M1676.01 597.401C1672.45 612.229 1654.91 611.527 1650.79 611.466C1646.66 611.404 1629.12 611.575 1626 596.646C1622.86 581.548 1628.82 517.057 1652.21 517.412C1675.61 517.765 1679.61 582.405 1676.01 597.402L1676.01 597.401Z"
                fill="#E81818"
              />
              <g id="Group_3" opacity="0.7">
                <path
                  id="Vector_25"
                  d="M1646.9 611.323C1640.95 609.774 1634.56 606.157 1632.8 597.71C1629.73 582.992 1635.32 521.358 1657.26 518.574C1655.69 517.838 1654 517.432 1652.21 517.406C1628.82 517.054 1622.86 581.544 1626 596.644C1628.49 608.578 1640.2 610.859 1646.91 611.322L1646.9 611.323Z"
                  fill="#F2F2F2"
                />
              </g>
              <g id="Group_4" opacity="0.3">
                <path
                  id="Vector_26"
                  d="M1670.12 597.175C1667.31 608.87 1655.82 610.904 1649.06 611.212C1651.15 609.215 1652.82 606.556 1653.67 602.991C1656.78 590.055 1654.23 540.172 1638.45 526.49C1641.53 521.786 1645.21 518.562 1649.55 517.667C1670.08 523.623 1673.55 582.902 1670.12 597.176L1670.12 597.175Z"
                  fill="#000072"
                />
              </g>
              <path
                id="Vector_27"
                d="M1676.59 603.83C1673.14 609.622 1665.9 614.7 1651.08 614.44L1650.4 614.43C1630.74 614.18 1624.7 604.952 1623.09 597.254C1620.26 583.638 1624 539.016 1638.21 521.808C1642.31 516.844 1647.03 514.366 1652.25 514.446C1657.47 514.523 1662.12 517.144 1666.07 522.233C1679.77 539.883 1682.14 584.582 1678.89 598.097C1678.44 599.978 1677.72 601.944 1676.59 603.834L1676.59 603.83ZM1640.13 529.398C1629.59 547.104 1626.58 584.85 1628.91 596.04C1630.62 604.257 1637.68 608.331 1650.48 608.493L1651.18 608.505C1663.99 608.729 1671.16 604.87 1673.12 596.709C1676 584.718 1673.6 541.62 1661.38 525.872C1658.55 522.227 1655.54 520.431 1652.16 520.381C1648.79 520.331 1645.72 522.034 1642.78 525.588C1641.85 526.717 1640.97 527.995 1640.13 529.4L1640.13 529.398Z"
                fill="#000072"
              />
              <path
                id="Vector_28"
                d="M1678.79 574.784C1678.52 575.246 1678.07 575.61 1677.52 575.776C1660.32 580.919 1642.22 580.65 1625.18 574.998C1624.15 574.674 1623.48 573.63 1623.65 572.525C1623.84 571.311 1624.98 570.483 1626.19 570.674C1626.31 570.692 1626.43 570.722 1626.55 570.761C1642.73 576.135 1659.91 576.394 1676.24 571.511C1677.42 571.158 1678.66 571.828 1679.01 573.005C1679.2 573.628 1679.1 574.266 1678.79 574.783L1678.79 574.784Z"
                fill="#000072"
              />
            </g>
            <g id="Group_5">
              <g id="Group_6">
                <path
                  id="Vector_29"
                  d="M1526.37 617.37C1526.37 617.37 1505.4 632.571 1536.97 673.709C1538.46 675.642 1541.33 675.733 1542.92 673.887C1551.46 663.972 1573.61 634.956 1556.48 618.288L1526.37 617.37Z"
                  fill="#E81818"
                />
                <path
                  id="Vector_30"
                  d="M1530.73 617.414C1530.73 617.414 1515.84 628.201 1538.35 657.409C1539.33 658.689 1541.24 658.748 1542.3 657.527C1548.24 650.666 1564.22 629.934 1552.01 618.065L1530.73 617.414Z"
                  fill="#E7A900"
                />
                <path
                  id="Vector_31"
                  d="M1534.23 616.39C1534.23 616.39 1524.19 623.668 1539.38 643.377C1540.04 644.24 1541.33 644.28 1542.04 643.456C1546.05 638.827 1556.83 624.839 1548.6 616.828L1534.24 616.39L1534.23 616.39Z"
                  fill="#FFFD01"
                />
                <path
                  id="Vector_32"
                  d="M1557.2 659.109C1553.15 665.897 1548.48 671.798 1545.08 675.745C1543.76 677.274 1541.85 678.118 1539.84 678.062C1537.82 678.005 1535.95 677.051 1534.71 675.444C1521.13 657.744 1515.17 642.349 1517.02 629.691C1518.47 619.686 1524.45 615.252 1524.7 615.068C1525.21 614.698 1525.83 614.508 1526.46 614.528L1556.56 615.446C1557.27 615.469 1557.95 615.755 1558.46 616.251C1570.87 628.319 1565.3 645.495 1557.19 659.11L1557.2 659.109ZM1525.17 623.15C1524.11 624.926 1523.06 627.421 1522.62 630.742C1521.59 638.339 1523.63 651.66 1539.23 671.978C1539.48 672.31 1539.82 672.368 1540 672.372C1540.17 672.377 1540.5 672.339 1540.77 672.031C1547.8 663.866 1569.31 636.394 1555.24 621.097L1527.4 620.247C1526.84 620.801 1526 621.752 1525.17 623.149L1525.17 623.15Z"
                  fill="#000072"
                />
              </g>
              <path
                id="Vector_33"
                d="M1554.36 599.201C1559.56 606.624 1559.43 615.431 1559.43 615.431C1559.43 615.431 1553.02 618.954 1539.72 618.753C1526.43 618.553 1520.13 614.837 1520.13 614.837C1520.13 614.837 1520.26 606.031 1525.68 598.767"
                fill="#E2E8E8"
              />
              <path
                id="Vector_34"
                d="M1561.98 616.951C1561.71 617.397 1561.33 617.774 1560.86 618.032C1560.57 618.192 1553.6 621.933 1539.68 621.722C1525.76 621.511 1518.9 617.563 1518.62 617.395C1517.7 616.853 1517.14 615.859 1517.16 614.793C1517.17 614.393 1517.38 604.94 1523.3 596.993C1524.28 595.679 1526.14 595.408 1527.45 596.388C1528.77 597.369 1529.04 599.241 1528.06 600.543C1524.72 605.029 1523.62 610.275 1523.26 613.013C1525.78 614.001 1531.24 615.659 1539.77 615.788C1548.29 615.916 1553.79 614.428 1556.35 613.513C1556.08 610.768 1555.14 605.488 1551.93 600.907C1550.99 599.563 1551.32 597.711 1552.66 596.772C1554.01 595.832 1555.86 596.159 1556.8 597.501C1562.48 605.619 1562.4 615.079 1562.4 615.478C1562.39 616.007 1562.24 616.513 1561.98 616.951L1561.98 616.951Z"
                fill="#000072"
              />
              <path
                id="Vector_35"
                d="M1565.1 594.121C1561.54 608.95 1544.01 608.248 1539.88 608.187C1535.76 608.125 1518.21 608.296 1515.1 593.366C1511.95 578.268 1517.91 513.778 1541.31 514.132C1564.7 514.485 1568.71 579.126 1565.1 594.123L1565.1 594.121Z"
                fill="#E81818"
              />
              <g id="Group_7" opacity="0.7">
                <path
                  id="Vector_36"
                  d="M1536 608.045C1530.04 606.496 1523.65 602.879 1521.89 594.432C1518.83 579.715 1524.41 518.08 1546.36 515.296C1544.78 514.562 1543.1 514.154 1541.31 514.128C1517.91 513.776 1511.95 578.266 1515.1 593.366C1517.58 605.3 1529.3 607.58 1536 608.044L1536 608.045Z"
                  fill="#F2F2F2"
                />
              </g>
              <g id="Group_8" opacity="0.3">
                <path
                  id="Vector_37"
                  d="M1559.21 593.896C1556.41 605.591 1544.92 607.624 1538.16 607.933C1540.24 605.936 1541.91 603.277 1542.76 599.712C1545.88 586.776 1543.32 536.893 1527.54 523.211C1530.62 518.506 1534.31 515.282 1538.65 514.388C1559.18 520.344 1562.65 579.623 1559.22 593.897L1559.21 593.896Z"
                  fill="#000072"
                />
              </g>
              <path
                id="Vector_38"
                d="M1565.69 600.552C1562.24 606.344 1555 611.423 1540.18 611.161L1539.5 611.15C1519.84 610.902 1513.8 601.673 1512.19 593.972C1509.36 580.358 1513.09 535.73 1527.31 518.527C1531.41 513.562 1536.13 511.085 1541.35 511.164C1546.57 511.242 1551.22 513.863 1555.17 518.953C1568.87 536.603 1571.24 581.301 1567.99 594.817C1567.54 596.698 1566.82 598.664 1565.69 600.554L1565.69 600.552ZM1529.23 526.118C1518.69 543.825 1515.67 581.571 1518 592.761C1519.72 600.979 1526.78 605.054 1539.58 605.215L1540.28 605.226C1553.08 605.453 1560.26 601.591 1562.22 593.431C1565.1 581.44 1562.7 538.342 1550.48 522.594C1547.65 518.949 1544.64 517.153 1541.26 517.103C1537.89 517.053 1534.82 518.756 1531.88 522.31C1530.95 523.439 1530.06 524.717 1529.23 526.122L1529.23 526.118Z"
                fill="#000072"
              />
              <path
                id="Vector_39"
                d="M1567.89 571.506C1567.61 571.968 1567.17 572.332 1566.62 572.498C1549.4 577.646 1531.29 577.371 1514.25 571.707C1514.09 571.657 1513.95 571.589 1513.81 571.508C1512.75 570.879 1512.41 569.513 1513.04 568.455C1513.59 567.521 1514.72 567.143 1515.71 567.501C1531.87 572.858 1549.03 573.109 1565.34 568.233C1566.52 567.879 1567.76 568.55 1568.11 569.727C1568.3 570.349 1568.2 570.988 1567.89 571.504L1567.89 571.506Z"
                fill="#000072"
              />
            </g>
            <path
              id="Vector_40"
              d="M1572.38 599.481C1582.65 601.598 1593.11 602.465 1603.55 602.077C1613.59 601.714 1623.6 600.186 1633.38 597.501C1641.1 595.374 1647.03 589.185 1648.82 581.388L1652.78 564.139L1603.65 563.953L1544.04 563.736L1547.87 581.013C1548.74 584.917 1550.64 588.43 1553.28 591.237C1555.94 594.045 1559.33 596.149 1563.18 597.235C1566.23 598.094 1569.29 598.846 1572.38 599.481V599.481Z"
              fill="#E2E8E8"
            />
            <path
              id="Vector_41"
              d="M1608.56 185.051C1620.97 194.734 1644.4 216.286 1664.29 253.215C1680.64 283.568 1694.59 324.325 1698.05 377.437C1700.29 411.885 1697.82 441.581 1693.06 466.51C1680.66 531.538 1652.77 564.139 1652.77 564.139C1651.85 564.477 1650.92 564.807 1650 565.117C1632.29 571.238 1613.77 574.072 1595.3 573.643C1585.18 573.409 1575.1 572.19 1565.16 570.001C1564.89 569.942 1564.62 569.877 1564.35 569.813C1557.47 568.257 1550.69 566.231 1544.04 563.739C1544.04 563.739 1534.37 552.248 1523.99 529.366C1522.28 525.62 1520.57 521.577 1518.88 517.221C1516.87 512.059 1514.88 506.456 1513 500.439C1512.82 499.869 1512.65 499.298 1512.46 498.722C1510.1 491.008 1507.89 482.613 1505.99 473.537C1505.48 471.036 1504.97 468.478 1504.49 465.869C1499.92 440.902 1497.65 411.173 1500.15 376.709C1500.31 374.564 1500.48 372.425 1500.68 370.315C1501.48 361.312 1502.59 352.678 1503.96 344.399C1505.86 332.913 1508.26 322.118 1511.05 311.99C1515.44 296.044 1520.78 281.748 1526.65 268.979C1527.81 266.457 1528.99 263.997 1530.19 261.591C1551.25 219.331 1577.62 195.302 1591.06 184.971C1596.22 180.997 1603.42 181.039 1608.56 185.053L1608.56 185.051Z"
              fill="#F2F2F2"
            />
            <path
              id="Vector_42"
              d="M1520.56 283.347C1541.44 278.964 1562.59 276.373 1583.8 275.576C1615.46 274.376 1647.21 277.161 1678.32 283.931C1656.83 227.828 1624.08 197.164 1608.57 185.046C1603.43 181.035 1596.22 181.008 1591.05 184.98C1590.66 185.28 1590.25 185.594 1589.84 185.922C1573.79 198.532 1541.91 228.813 1520.56 283.347V283.347Z"
              fill="#E81818"
            />
            <g id="Group_9" opacity="0.3">
              <path
                id="Vector_43"
                d="M1613.58 195.539L1613.58 195.547C1626.12 207.504 1642.23 226.086 1656.51 252.599C1672.85 282.952 1686.81 323.706 1690.27 376.821C1692.51 411.27 1690.03 440.961 1685.27 465.89C1672.87 530.919 1644.98 563.522 1644.98 563.522C1644.98 563.522 1644.98 563.522 1644.98 563.523L1644.99 563.522L1641.03 580.771C1639.24 588.568 1633.31 594.758 1625.59 596.885C1618.03 598.96 1610.34 600.336 1602.6 601.025L1602.67 573.412C1601.78 573.439 1600.88 573.467 1599.99 573.479L1594.97 530.776C1594.97 530.776 1617.27 526.093 1626.13 556.037C1634.91 535.765 1643.75 509.704 1649.82 477.859C1653.27 459.785 1655.82 439.83 1656.97 418.031C1645.11 432.213 1626.04 439.585 1606.66 435.591C1578.59 429.805 1560.53 402.361 1566.32 374.294C1572.1 346.227 1599.55 328.164 1627.61 333.95C1639.04 336.305 1648.8 342.248 1655.98 350.359C1650.74 285.267 1633.71 234.355 1613.58 195.54L1613.58 195.539Z"
                fill="#000072"
              />
            </g>
            <path
              id="Vector_44"
              d="M1680.87 285.445C1680.79 285.591 1680.69 285.729 1680.58 285.86C1679.87 286.687 1678.76 287.058 1677.69 286.826C1625.81 275.537 1573.14 275.341 1521.17 286.246C1520.1 286.47 1518.99 286.091 1518.29 285.258C1517.59 284.425 1517.4 283.273 1517.79 282.26C1539.36 227.176 1571.36 196.544 1588.52 183.184C1595.19 177.99 1604.48 178.025 1611.11 183.269C1628.17 196.755 1659.93 227.626 1681.1 282.864C1681.42 283.721 1681.33 284.671 1680.87 285.444L1680.87 285.445ZM1525.37 279.34C1574.6 269.74 1624.39 269.924 1673.54 279.889C1652.94 229.17 1623.48 200.616 1607.43 187.927C1602.95 184.384 1596.67 184.361 1592.17 187.869C1576.03 200.438 1546.35 228.777 1525.37 279.341L1525.37 279.34Z"
              fill="#000072"
            />
            <path
              id="Vector_45"
              d="M1665.53 550.731C1659.63 560.626 1655.34 565.709 1655.03 566.073C1654.7 566.46 1654.27 566.756 1653.79 566.932C1635.98 573.457 1617.32 576.731 1598.35 576.661C1579.38 576.59 1560.75 573.179 1542.99 566.522C1542.52 566.343 1542.09 566.044 1541.76 565.655C1541.21 564.998 1528.08 549.217 1515.95 517.888C1504.8 489.112 1492.5 441.223 1497.2 376.499C1499.66 342.568 1506.59 310.862 1517.79 282.261C1518.16 281.33 1518.97 280.645 1519.95 280.438C1572.74 269.364 1626.22 269.559 1678.91 281.018C1679.9 281.216 1680.74 281.904 1681.11 282.865C1692.1 311.547 1698.79 343.303 1701.01 377.252C1705.23 442.01 1692.57 489.807 1681.2 518.498C1675.77 532.234 1670.15 542.963 1665.53 550.73L1665.53 550.731ZM1650.99 561.634C1653.45 558.542 1665.09 543.178 1675.8 516.017C1686.88 487.936 1699.22 441.132 1695.08 377.639C1692.95 344.879 1686.57 314.223 1676.13 286.493C1625.28 275.649 1573.69 275.457 1522.74 285.922C1512.09 313.575 1505.49 344.186 1503.12 376.928C1498.51 440.391 1510.5 487.284 1521.37 515.445C1531.88 542.685 1543.39 558.133 1545.84 561.246C1562.7 567.467 1580.38 570.657 1598.37 570.723C1616.37 570.79 1634.06 567.731 1650.99 561.634Z"
              fill="#000072"
            />
            <path
              id="Vector_46"
              d="M1648.85 589.182C1645.63 594.583 1640.42 598.638 1634.17 600.36C1610.66 606.824 1585.84 606.731 1562.38 600.093C1553.61 597.613 1546.94 590.547 1544.97 581.654L1541.14 564.38C1540.78 562.78 1541.79 561.194 1543.39 560.84C1544.99 560.485 1546.58 561.495 1546.93 563.095L1550.76 580.368C1552.26 587.127 1557.33 592.497 1563.99 594.382C1586.41 600.724 1610.13 600.812 1632.59 594.636C1639.27 592.801 1644.38 587.47 1645.92 580.721L1649.88 563.476C1650.25 561.881 1651.84 560.882 1653.44 561.248C1655.03 561.615 1656.03 563.208 1655.67 564.805L1651.71 582.05C1651.12 584.603 1650.15 587.004 1648.85 589.183L1648.85 589.182Z"
              fill="#000072"
            />
            <g id="Group_10" opacity="0.3">
              <path
                id="Vector_47"
                d="M1591.52 203.789C1578.06 211.335 1553.22 245.205 1561.16 256.32C1568.72 266.894 1604.97 196.241 1591.52 203.789Z"
                fill="#F2F2F2"
              />
            </g>
            <g id="Group_11">
              <path
                id="Vector_48"
                d="M1646.46 411.873C1660.93 387.593 1652.97 356.185 1628.69 341.722C1604.41 327.259 1573 335.218 1558.54 359.498C1544.07 383.779 1552.03 415.186 1576.31 429.649C1600.59 444.112 1632 436.154 1646.46 411.873Z"
                fill="#E81818"
              />
              <g id="Group_12" opacity="0.7">
                <path
                  id="Vector_49"
                  d="M1589.86 435.323C1591.33 435.627 1592.81 435.866 1594.28 436.041C1569.11 428.537 1553.43 402.885 1558.83 376.685C1564.23 350.476 1588.78 333.117 1614.87 336.182C1613.45 335.76 1612 335.396 1610.52 335.093C1582.84 329.386 1555.78 347.198 1550.07 374.879C1544.36 402.552 1562.18 429.615 1589.86 435.323Z"
                  fill="#F2F2F2"
                />
              </g>
              <g id="Group_13" opacity="0.25">
                <path
                  id="Vector_50"
                  d="M1592.17 435.799C1619.85 441.506 1646.91 423.695 1652.62 396.021C1658.32 368.339 1640.51 341.275 1612.83 335.568C1611.29 335.25 1609.76 335.008 1608.22 334.831C1633.28 342.402 1648.87 367.998 1643.48 394.137C1638.09 420.274 1613.65 437.611 1587.64 434.653C1589.12 435.097 1590.62 435.481 1592.17 435.799V435.799Z"
                  fill="#000072"
                />
              </g>
              <path
                id="Vector_51"
                d="M1648.56 413.168C1644.47 420.034 1638.84 425.939 1631.97 430.462C1620.01 438.333 1605.7 441.075 1591.68 438.184C1577.65 435.294 1565.6 427.115 1557.73 415.154C1549.85 403.193 1547.11 388.884 1550 374.862C1555.97 345.915 1584.38 327.219 1613.32 333.185C1642.27 339.153 1660.97 367.56 1655 396.507C1653.77 402.473 1651.58 408.082 1648.56 413.166L1648.56 413.168ZM1560.6 360.777C1557.89 365.321 1555.89 370.379 1554.77 375.843C1552.14 388.594 1554.63 401.605 1561.79 412.479C1568.95 423.354 1579.91 430.79 1592.66 433.42C1605.41 436.048 1618.42 433.555 1629.3 426.396C1640.17 419.238 1647.61 408.275 1650.24 395.525C1655.66 369.203 1638.66 343.374 1612.34 337.947C1591.48 333.646 1570.93 343.431 1560.6 360.774L1560.6 360.777Z"
                fill="#000072"
              />
              <path
                id="Vector_52"
                d="M1596.06 416.962C1606.41 419.096 1616.63 415.95 1623.92 409.368C1628 405.695 1631.15 400.952 1632.91 395.451C1633.25 394.374 1633.54 393.27 1633.78 392.135C1634.14 390.369 1634.36 388.609 1634.41 386.864C1634.64 380.953 1633.21 375.248 1630.47 370.28C1626.12 362.39 1618.47 356.374 1608.95 354.412C1599.43 352.449 1590.02 354.948 1582.9 360.474C1578.43 363.955 1574.86 368.629 1572.73 374.146C1572.09 375.772 1571.59 377.473 1571.23 379.238C1570.99 380.374 1570.83 381.504 1570.71 382.628C1570.16 388.377 1571.18 393.98 1573.46 398.963C1577.55 407.891 1585.69 414.824 1596.05 416.959L1596.06 416.962Z"
                fill="#22A7F0"
              />
              <g id="Group_14">
                <path
                  id="Vector_53"
                  opacity="0.7"
                  d="M1573.99 398.444L1626.6 363.821C1622.58 359.481 1617.53 356.458 1612.08 354.883L1571.52 381.583C1570.82 387.208 1571.6 393.038 1573.99 398.445L1573.99 398.444Z"
                  fill="url(#paint0_linear_218_2)"
                />
              </g>
              <g id="Group_15">
                <path
                  id="Vector_54"
                  opacity="0.7"
                  d="M1592.06 415.479L1635.09 387.157C1635.38 381.675 1634.25 376.095 1631.61 370.958L1578.57 405.869C1582.24 410.327 1586.92 413.57 1592.06 415.479V415.479Z"
                  fill="url(#paint1_linear_218_2)"
                />
              </g>
              <path
                id="Vector_55"
                d="M1632.04 403.247C1624.76 415.477 1610.27 422.374 1595.56 419.343C1577 415.517 1565.01 397.304 1568.84 378.746C1570.7 369.755 1575.94 362.026 1583.61 356.978C1591.27 351.932 1600.45 350.173 1609.44 352.027C1618.43 353.879 1626.16 359.124 1631.21 366.791C1636.25 374.458 1638.01 383.634 1636.16 392.625C1635.36 396.476 1633.95 400.045 1632.04 403.247V403.247ZM1596.54 414.579C1612.47 417.863 1628.11 407.572 1631.39 391.642C1632.98 383.924 1631.47 376.048 1627.14 369.466C1622.81 362.884 1616.17 358.382 1608.46 356.791C1600.74 355.2 1592.86 356.71 1586.28 361.042C1579.7 365.373 1575.2 372.009 1573.6 379.727C1570.32 395.66 1580.61 411.292 1596.54 414.578L1596.54 414.579Z"
                fill="#000072"
              />
            </g>
            <g id="Group_16">
              <g id="Group_17">
                <path
                  id="Vector_56"
                  d="M1580.11 635.598C1580.11 635.598 1559.13 650.799 1590.71 691.938C1592.19 693.871 1595.07 693.962 1596.66 692.116C1605.2 682.201 1627.35 653.184 1610.21 636.517L1580.11 635.598V635.598Z"
                  fill="#E81818"
                />
                <path
                  id="Vector_57"
                  d="M1584.46 635.642C1584.46 635.642 1569.58 646.429 1592.08 675.637C1593.06 676.916 1594.98 676.975 1596.03 675.754C1601.97 668.893 1617.95 648.162 1605.75 636.293L1584.46 635.642Z"
                  fill="#E7A900"
                />
                <path
                  id="Vector_58"
                  d="M1587.97 634.618C1587.97 634.618 1577.92 641.896 1593.11 661.605C1593.77 662.468 1595.06 662.508 1595.78 661.684C1599.78 657.054 1610.57 643.067 1602.33 635.056L1587.97 634.617L1587.97 634.618Z"
                  fill="#FFFD01"
                />
                <path
                  id="Vector_59"
                  d="M1610.93 677.339C1606.89 684.124 1602.21 690.027 1598.81 693.972C1597.5 695.501 1595.59 696.345 1593.57 696.287C1591.55 696.231 1589.68 695.276 1588.45 693.67C1574.86 675.968 1568.91 660.574 1570.75 647.915C1572.21 637.908 1578.18 633.476 1578.44 633.292C1578.95 632.922 1579.56 632.732 1580.19 632.752L1610.3 633.672C1611.01 633.694 1611.68 633.98 1612.19 634.477C1624.6 646.545 1619.04 663.721 1610.93 677.338L1610.93 677.339ZM1578.9 641.378C1577.85 643.153 1576.8 645.649 1576.35 648.97C1575.32 656.566 1577.37 669.888 1592.96 690.206C1593.22 690.538 1593.55 690.596 1593.73 690.6C1593.91 690.605 1594.24 690.567 1594.5 690.26C1601.54 682.094 1623.04 654.623 1608.98 639.326L1581.14 638.475C1580.58 639.028 1579.74 639.98 1578.91 641.377L1578.9 641.378Z"
                  fill="#000072"
                />
              </g>
              <path
                id="Vector_60"
                d="M1608.1 617.428C1613.3 624.852 1613.16 633.658 1613.16 633.658C1613.16 633.658 1606.75 637.181 1593.46 636.981C1580.16 636.78 1573.86 633.064 1573.86 633.064C1573.86 633.064 1573.99 624.258 1579.41 616.995"
                fill="#E2E8E8"
              />
              <path
                id="Vector_61"
                d="M1615.71 635.177C1615.45 635.623 1615.06 636 1614.59 636.258C1614.3 636.417 1607.33 640.159 1593.41 639.948C1579.49 639.737 1572.64 635.789 1572.35 635.621C1571.43 635.079 1570.88 634.085 1570.89 633.019C1570.9 632.621 1571.11 623.16 1577.03 615.219C1578.01 613.905 1579.87 613.634 1581.19 614.614C1582.5 615.595 1582.77 617.468 1581.79 618.769C1578.45 623.255 1577.35 628.5 1577 631.239C1579.52 632.227 1584.97 633.885 1593.5 634.014C1602.02 634.142 1607.53 632.654 1610.08 631.739C1609.81 628.994 1608.87 623.714 1605.67 619.133C1604.73 617.789 1605.05 615.939 1606.4 614.998C1607.74 614.058 1609.59 614.385 1610.53 615.727C1616.21 623.845 1616.14 633.305 1616.13 633.704C1616.12 634.233 1615.97 634.739 1615.71 635.177L1615.71 635.177Z"
                fill="#000072"
              />
              <path
                id="Vector_62"
                d="M1618.84 612.349C1615.28 627.177 1597.74 626.476 1593.62 626.414C1589.49 626.353 1571.95 626.523 1568.83 611.594C1565.69 596.496 1571.64 532.005 1595.04 532.36C1618.43 532.713 1622.44 597.353 1618.84 612.35L1618.84 612.349Z"
                fill="#E81818"
              />
              <g id="Group_18" opacity="0.7">
                <path
                  id="Vector_63"
                  d="M1589.73 626.273C1583.77 624.723 1577.38 621.106 1575.63 612.659C1572.56 597.942 1578.15 536.309 1600.09 533.523C1598.52 532.787 1596.83 532.381 1595.04 532.355C1571.64 532.003 1565.69 596.494 1568.83 611.593C1571.32 623.527 1583.03 625.808 1589.73 626.271L1589.73 626.273Z"
                  fill="#F2F2F2"
                />
              </g>
              <g id="Group_19" opacity="0.3">
                <path
                  id="Vector_64"
                  d="M1612.95 612.123C1610.14 623.818 1598.65 625.852 1591.89 626.161C1593.98 624.163 1595.65 621.505 1596.5 617.94C1599.61 605.003 1597.06 555.12 1581.28 541.438C1584.36 536.734 1588.04 533.51 1592.38 532.615C1612.91 538.571 1616.38 597.851 1612.95 612.124L1612.95 612.123Z"
                  fill="#000072"
                />
              </g>
              <path
                id="Vector_65"
                d="M1619.42 618.779C1615.97 624.571 1608.74 629.65 1593.91 629.388L1593.24 629.377C1573.58 629.13 1567.53 619.901 1565.92 612.201C1563.09 598.585 1566.82 553.974 1581.04 536.754C1585.14 531.79 1589.87 529.312 1595.08 529.391C1600.31 529.469 1604.95 532.09 1608.9 537.178C1622.6 554.828 1624.97 599.526 1621.72 613.042C1621.27 614.923 1620.55 616.888 1619.42 618.779ZM1582.96 544.347C1572.42 562.053 1569.41 599.798 1571.74 610.989C1573.45 619.207 1580.51 623.281 1593.31 623.442L1594.01 623.453C1606.82 623.68 1613.99 619.82 1615.95 611.657C1618.83 599.665 1616.44 556.568 1604.21 540.82C1601.38 537.175 1598.37 535.379 1594.99 535.328C1591.62 535.277 1588.55 536.981 1585.62 540.534C1584.68 541.664 1583.8 542.943 1582.96 544.347L1582.96 544.347Z"
                fill="#000072"
              />
              <path
                id="Vector_66"
                d="M1620.35 590.725C1603.14 595.872 1585.03 595.598 1567.98 589.934C1567.83 589.883 1567.68 589.816 1567.54 589.734C1566.49 589.105 1566.14 587.739 1566.77 586.682C1567.32 585.749 1568.45 585.37 1569.44 585.728C1585.6 591.085 1602.76 591.338 1619.07 586.459L1620.35 590.725V590.725Z"
                fill="#000072"
              />
            </g>
          </g>
        </g>
        <defs>
          <linearGradient
            id="paint0_linear_218_2"
            x1="1584.47"
            y1="382.374"
            x2="1610.37"
            y2="365.201"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <linearGradient
            id="paint1_linear_218_2"
            x1="1597.69"
            y1="402.57"
            x2="1623.81"
            y2="385.254"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="white" />
            <stop offset="1" stopColor="white" />
          </linearGradient>
          <clipPath id="clip0_218_2">
            <rect width="2174" height="1242" fill="white" />
          </clipPath>
        </defs>
      </svg>
    </section>
  );
};

export default Contact;