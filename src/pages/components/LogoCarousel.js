import React from "react";
import clsx from "clsx";
import styles from "./LogoCarousel.module.css";
import Link from '@docusaurus/Link'
const INTERVAL_LENGTH = 5000;
const LOGO_WIDTH = 150;

let ticks = 0;

export default class LogoCarousel extends React.Component {
  render() {

    return (

      // <div class = "logoutsider">
      <div class="logocontainer">
        
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3fqcx14kvj20e80e874i.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3fqcx14kvj20e80e874i.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://pic.stackoverflow.wiki/uploadImages/223/102/83/221/2022/06/21/20/08/a218eb02-a7fd-4893-89d4-99209a552da5.svg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://pic.stackoverflow.wiki/uploadImages/223/102/83/221/2022/06/21/20/08/a218eb02-a7fd-4893-89d4-99209a552da5.svg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3g4m3d9zrj205k05k744.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3g4m3d9zrj205k05k744.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://pic.stackoverflow.wiki/uploadImages/223/102/83/221/2022/06/21/20/18/70a9cc63-6db3-4053-a301-e5418f1d00ff.svg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://pic.stackoverflow.wiki/uploadImages/223/102/83/221/2022/06/21/20/18/70a9cc63-6db3-4053-a301-e5418f1d00ff.svg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4vm72jxj2050050q2r.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4vm72jxj2050050q2r.jpg"
            width="100"
            height="100"
          />
        </div>

        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4wq8y9pj2069069jr9.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4wq8y9pj2069069jr9.jpg"
            width="100"
            height="100"
          />
        </div>

        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4zbu6abj20jx0jwdgw.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g4zbu6abj20jx0jwdgw.jpg"
            width="100"
            height="100"
          />
        </div>

        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g50bimdsj20sg0sgmyd.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g50bimdsj20sg0sgmyd.jpg"
            width="100"
            height="100"
          />
        </div>

        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g52r58mzj2069069747.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g52r58mzj2069069747.jpg"
            width="100"
            height="100"
          />
        </div>

        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g53xb8bbj20ak0akdfw.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g53xb8bbj20ak0akdfw.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g56nxlqcj20ak0akglg.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g56nxlqcj20ak0akglg.jpg"
            width="100"
            height="100"
          />
        </div> <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5880op2j204w04wwea.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5880op2j204w04wwea.jpg"
            width="100"
            height="100"
          />
        </div> <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3eskzhtqqj204g04gwee.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24ely1h3eskzhtqqj204g04gwee.jpg"
            width="100"
            height="100"
          />
        </div> <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5b0l7l3j2069069mx0.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5b0l7l3j2069069mx0.jpg"
            width="100"
            height="100"
          />
        </div> <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5cflcqxj2068069dfs.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5cflcqxj2068069dfs.jpg"
            width="100"
            height="100"
          />
        </div> <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5eu1ek9j20fm0cxjs3.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5eu1ek9j20fm0cxjs3.jpg"
            width="100"
            height="100"
          />
        </div> <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5gbxxp9j209r07bmwz.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5gbxxp9j209r07bmwz.jpg"
            width="100"
            height="100"
          />
        </div> <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5hxcyflj20ak0akjr8.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5hxcyflj20ak0akjr8.jpg"
            width="100"
            height="100"
          />
        </div> <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5j8raevj20go0h30sx.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5j8raevj20go0h30sx.jpg"
            width="100"
            height="100"
          />
        </div> <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5k883jyj20lg0mmaan.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5k883jyj20lg0mmaan.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g60z0706j2069069q2r.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g60z0706j2069069q2r.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5k883jyj20lg0mmaan.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5zfpv1ej2069069dfp.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5y3c88wj206l05wt90.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5y3c88wj206l05wt90.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5wf22b7j2069069wef.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5wf22b7j2069069wef.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5uxgd34j20qo0qh755.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5uxgd34j20qo0qh755.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5tmlkslj205v06m745.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5tmlkslj205v06m745.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5sp6vx7j2068068dft.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5sp6vx7j2068068dft.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5qaf3gcj206d06f0sm.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5qaf3gcj206d06f0sm.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5osssoij207b07aq2r.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5osssoij207b07aq2r.jpg"
            width="100"
            height="100"
          />
        </div>
        <div class="avatar">
          <img
            alt=""
            aria-hidden
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5malmpzj2069069aa5.jpg"
            class="background"
          />
          <img
            alt="Avatar"
            src="https://tva1.sinaimg.cn/large/e6c9d24egy1h3g5malmpzj2069069aa5.jpg"
            width="100"
            height="100"
          />
        </div>
        </div>
      // </div>
    );
  }
}
