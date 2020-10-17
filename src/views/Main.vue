<template>
  <div>
    <main>
      <section class="section-1">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="line" v-bind:class="{active:show}"></div>
              <div class="head-text">
                <transition name="slide-fade">
                  <p v-if="show">We are programmers.</p>
                </transition>
                <div></div>
              </div>
              <div class="head-text">
                <transition name="slide-fade">
                  <p v-if="show">The award winning</p>
                </transition>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
    <div class="main">
      <div class="container">
        <div class="row">
          <div class="col-md-6">
            <div class="img-right-bg" data-aos="fade-right">
              <div class="img-bg-body">
                <img src="../assets/images/bg-img.jpg" alt="">
              </div>
            </div>
          </div>
          <div class="col-md-6">
            <p class="text-right" data-aos="fade-left">
              Design Bureau is a full-service boutique design firm based in Cape Town. We are a team of multi-skilled
              digital specialists who are always up for a challenge and learning as fast as digital is changing.
            </p>
            <a href="" class="button">More</a>
          </div>
        </div>
      </div>
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="container-fluid-body">
                <div class="fluid-body-header">
                  <div class="header-line" data-aos="fade-right"></div>
                  <h1 class="line-text" data-aos="fade-left">WHAT WE DO</h1>
                </div>
                <h1 class="h1-text-head" data-aos="fade-left">our expertise lies in</h1>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-3">
              <div class="card" data-aos="fade-up">
                  <span style="width: 100px;height: auto">
                    <img src="../assets/images/card-icon-svg-1.svg" alt="icon">
                  </span>
                <div class="card-body-text">
                  <h2>ARCHITECTURE</h2>
                  <p>We design spaces from the concept to realization. The secret of our projects is success.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card" data-aos="fade-up">
                  <span style="width: 100px;height: auto">
                    <img src="../assets/images/card-icon-svg-2.svg" alt="icon">
                  </span>
                <div class="card-body-text">
                  <h2>INTERIOR DESIGN</h2>
                  <p>Your future house, office, bar, restaurant or library. We don't care what. We care how. Interior
                    that
                    inspires.</p>
                </div>

              </div>
            </div>
            <div class="col-md-3">
              <div class="card" data-aos="fade-up">
                  <span style="width: 100px;height: auto">
                    <img src="../assets/images/card-icon-svg-3.svg" alt="icon">
                  </span>
                <div class="card-body-text">
                  <h2>Product design</h2>
                  <p>A limited collection of furniture and decor. Each lamp, chair or tile is handmade and custom
                    designed. Be people for people.</p>
                </div>
              </div>
            </div>
            <div class="col-md-3">
              <div class="card" data-aos="fade-up">
                  <span style="width: 100px;height: auto">
                    <img src="../assets/images/card-icon-svg-4.svg" alt="icon">
                  </span>
                <div class="card-body-text">
                  <h2>LANDSCAPE DESIGN</h2>
                  <p>Innovative and inspirational designs created for private, residential gardens and roof
                    terraces.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="row-main-img">
          <div class="column" data-aos="fade-up">
            <img src="../assets/images/card-img-1.png" alt="">
          </div>
          <div class="column" data-aos="fade-up">
            <img src="../assets/images/card-img-2.png" alt="">
          </div>
          <div class="column" data-aos="fade-up">
            <img src="../assets/images/card-img-3.png" alt="">
          </div>
          <div class="column" data-aos="fade-up">
            <img src="../assets/images/card-img-4.png" alt="">
          </div>
        </div>
      </div>
    </div>

    <div class="some-news">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="container-fluid-body">
              <div class="fluid-body-header">
                <div class="header-line" data-aos="fade-right"></div>
                <h1 class="line-text" data-aos="fade-left">BLOG</h1>
              </div>
              <h1 class="h1-text-head" data-aos="fade-left">SOME of our latest <br>
                news
              </h1>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4">
            <div class="card-news" data-aos="fade-up">
              <div class="card-news-head">
                <span>
                  <img src="../assets/images/0001.png" alt="">
                </span>
              </div>
              <div class="card-news-body">
                <h2>Offices in a converted warehouse centre</h2>
                <p>A concrete staircase overlooked by a glazed showroom and library forms the centrepiece of this
                  headquarters for a textile brand in Mumbai designed by SJK Architects.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-news" data-aos="fade-up">
              <div class="card-news-head">
                <span>
                <img src="../assets/images/0002.png" alt="">
                </span>
              </div>
              <div class="card-news-body">
                <h2>Steven Holl to design new wing </h2>
                <p>New York architect Steven Holl has seen off competition from 104 applicants including Zaha
                  Hadid, OMA and Amanda Levete, to design a new wing for the Mumbai City Museum. More.</p>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card-news" data-aos="fade-up">
              <div class="card-news-head">
                <span>
                <img src="../assets/images/0003.png" alt="">
                </span>
              </div>
              <div class="card-news-body">
                <h2>3XN breaks ground on Mumbai skyscrapers modelled</h2>
                <p>Construction has started in Mumbai, India, on a pair of 38-storey towers with overlapping bases
                  that make reference to the knotted structures of mangrove stalks, according to Danish firm 3XN.
                  More.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="our-goal-dark">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="svg-style">
                 <span>
<svg width="123" height="42" viewBox="0 0 123 42" fill="#ffffff" xmlns="http://www.w3.org/2000/svg">
<path
    d="M8.54 0.119999V42H0.14V0.119999H8.54ZM42.5192 34.02H25.8392L23.0792 42H14.2592L29.3192 0.0599964H39.0992L54.1592 42H45.2792L42.5192 34.02ZM40.2392 27.3L34.1792 9.78L28.1192 27.3H40.2392ZM105.448 0.119999V42H97.0484V14.76L85.8284 42H79.4684L68.1884 14.76V42H59.7884V0.119999H69.3284L82.6484 31.26L95.9684 0.119999H105.448Z"
/>
<rect x="112" y="31" width="11" height="11"/>
</svg>

         </span>
            </div>
            <div class="fluid-body-header">
              <div class="header-line" data-aos="fade-right"></div>
              <h1 class="line-text" data-aos="fade-left">OUR GOAL</h1>
            </div>
            <h1 class="h1-text-head" data-aos="fade-left">
              Present the function of the <br> object in real time and place
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="col-md-8 offset-4">
              <h1 class="h1-text-head" data-aos="fade-left">
                homes
              </h1>
              <p class="p-default" data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda facilis maiores
                mollitia nulla quae
                sapiente sequi voluptatem. </p>
            </div>
            <div class="row">
              <div class="col-md-6" data-aos="fade-right">
                <img src="../assets/images/furniture/furniture-1.png" alt="Furniture">
              </div>
              <div class="col-md-6" data-aos="fade-right">
                <img src="../assets/images/furniture/furniture-2.png" alt="Furniture">
              </div>
            </div>
          </div>
          <div class="col-md-6" data-aos="fade-left">
            <img src="../assets/images/furniture/furniture-bg.png" alt="Furniture">
          </div>
        </div>
      </div>
    </div>
    <div class="our-goal-white">
      <div class="container">
        <div class="row">
          <div class="col-md-12">
            <div class="svg-style">
         <span>
<svg width="123" height="42" viewBox="0 0 123 42" fill="#2d2d2d" xmlns="http://www.w3.org/2000/svg">
<path
    d="M8.54 0.119999V42H0.14V0.119999H8.54ZM42.5192 34.02H25.8392L23.0792 42H14.2592L29.3192 0.0599964H39.0992L54.1592 42H45.2792L42.5192 34.02ZM40.2392 27.3L34.1792 9.78L28.1192 27.3H40.2392ZM105.448 0.119999V42H97.0484V14.76L85.8284 42H79.4684L68.1884 14.76V42H59.7884V0.119999H69.3284L82.6484 31.26L95.9684 0.119999H105.448Z"
/>
<rect x="112" y="31" width="11" height="11"/>
</svg>

         </span>
            </div>
            <div class="fluid-body-header">
              <div class="header-line" data-aos="fade-right"></div>
              <h1 class="line-text" data-aos="fade-left">OUR GOAL</h1>
            </div>
            <h1 class="h1-text-head" data-aos="fade-left">
              Present the function of the <br> object in real time and place
            </h1>
          </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="col-md-8 offset-4">
              <h1 class="h1-text-head" data-aos="fade-left">
                homes
              </h1>
              <p class="p-default" data-aos="fade-left">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Assumenda facilis maiores
                mollitia nulla quae
                sapiente sequi voluptatem. </p>
            </div>
            <div class="row">
              <div class="col-md-6" data-aos="fade-up">
                <img src="../assets/images/homes/home-1.png" alt="Home">
              </div>
              <div class="col-md-6" data-aos="fade-up">
                <img src="../assets/images/homes/home-2.png" alt="Home">
              </div>
            </div>
          </div>
          <div class="col-md-6" data-aos="fade-up">
            <img src="../assets/images/homes/home-bg.png" alt="Home">
          </div>
        </div>
      </div>
    </div>

    <div class="our-team">
      <div class="container-fluid">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h1 class="h1-text-head" data-aos="fade-left">
                our team
              </h1>
            </div>
          </div>
        </div>
        <div class="row-main-img">
          <div class="column">
            <img src="../assets/images/ourteam/our-team-man-1.png" alt="Man">
          </div>
          <div class="column">
            <img src="../assets/images/ourteam/our-team-girl-1.png" alt="Girl">
          </div>
          <div class="column">
            <img src="../assets/images/ourteam/our-team-man-2.png" alt="Man">
          </div>
          <div class="column">
            <img src="../assets/images/ourteam/our-team-girl-2.png" alt="Man">
          </div>
        </div>
      </div>
    </div>

    <Footer/>
  </div>
</template>

<script>
import Footer from "@/views/Footer";

export default {
  name: "Main",
  components: {
    Footer
  },
  data() {
    return {
      show: false
    }

  }, mounted() {
    setTimeout(() => {
      this.show = true
    }, 6000)
  }
}
</script>
<style lang="scss">
.our-team {
  padding: 0 0 50px 0;

  h1.h1-text-head {
    display: block;
    text-transform: uppercase;
    font-size: 32px;
    font-weight: 700;
    font-family: 'Poppins', sans-serif;
    color: #2d2d2d;
    margin: 0;
  }

  .column:after {
    position: absolute;
    bottom: 7%;
    left: 10%;
    font-family: 'Poppins', sans-serif;
    color: #fff;
    font-size: 14px;
    font-weight: 500;
  }

  .column:nth-child(1):before {
    content: "JAMES STANLEY";
    bottom: 12%;
  }


  .column:nth-child(1):after {
    content: "co-founder, architect";
  }

  .column:nth-child(2):before {
    content: "CHASTER PERKINS";
    bottom: 12%;
  }

  .column:nth-child(2):after {
    content: "co-founder, interior designer";
  }

  .column:nth-child(3):before {
    content: "SHAUN MCKINNEY";
    bottom: 12%;
  }

  .column:nth-child(3):after {
    content: "structural engineer";
  }

  .column:nth-child(4):before {
    content: "CHLOE TODD";
    bottom: 12%;
  }

  .column:nth-child(4):after {
    content: "MEP engineer";
  }

}

.our-goal-dark, .our-goal-white {

  h1.h1-text-head {
    margin-left: 0;
  }

  p.p-default {
    font-family: 'Poppins', sans-serif;
    font-size: 16px;
    font-weight: 500;
  }

  img {
    width: 100%;
  }

  .svg-style {
    position: relative;

    span {
      position: absolute;
      right: 0;
      top: -10%;

      svg {
        width: 400px;
        height: auto;
        opacity: 0.1;
      }
    }
  }
}

.our-goal-white {
  padding: 50px 0 0 0;

  h1.h1-text-head {
    color: #2d2d2d;
  }

  .fluid-body-header {
    .header-line {
      background-color: #2d2d2d;
    }
  }

  .line-text {
    color: #2d2d2d;
  }
}

.our-goal-dark {
  padding: 50px 0;

  background-color: #2d2d2d;

  h1.h1-text-head {
    color: #fff;
  }

  p.p-default {
    color: #fff;
  }
}


.some-news {
  padding: 50px 0;

  .header-line {
    background-color: #2d2d2d;
  }

  h1 {
    color: #2d2d2d;
  }
}

.card-news {

  .card-news-head {
    position: relative;

    span {
      img {
        width: 100%;
        height: auto;
      }

      &:after {
        content: "architecture";
        position: absolute;
        left: 0;
        bottom: 4px;
        font-family: 'Poppins', sans-serif;
        font-size: 14px;
        font-weight: 500;
        color: #fff;
        background-color: #2b2b2b;
        padding: 20px 15px 32px 60px;
      }
    }
  }

  .card-news-body {
    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 600;
      color: #2d2d2d;
    }

    p {
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 500;
      color: #2d2d2d;
    }
  }
}

.row-main-img {
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;

  .column {
    flex: 25%;
    max-width: 25%;
    position: relative;

    img {
      width: 100%;
    }

    &:before {
      content: "";
      position: absolute;
      bottom: 10%;
      left: 10%;
      font-family: 'Poppins', sans-serif;
      color: #fff;
      font-size: 18px;
      font-weight: 500;
    }
  }
}

.column:nth-child(1):before {
  content: "ARCH BUILDING";
}

.column:nth-child(2):before {
  content: "FURNITURE DESIGN";
}

.column:nth-child(3):before {
  content: "OUR INTERIORS";
}

.column:nth-child(4):before {
  content: "ARCH BUILDING";
}


.container-fluid {
  height: auto;
  padding: 50px 0 0 0 !important;
}

.main {
  .container-fluid {
    margin-top: 100px;
    background-color: #2d2d2d;
  }
}

.line-text {
  display: inline-block;
  font-size: 18px;
  font-weight: 500;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  margin-left: 20px;
}


.header-line {
  height: 3px;
  width: 60px;
  background-color: #fff;
  border-radius: 15px;
  display: inline-block;
  margin-bottom: 5px;

}

.h1-text-head {
  display: block;
  text-transform: uppercase;
  font-size: 32px;
  font-weight: 700;
  font-family: 'Poppins', sans-serif;
  color: #fff;
  margin: 15px 0 35px 90px;
}

.card {
  padding: 15px 15px;
  border: 3px solid #fff;
  margin-bottom: 10px;

  span {
    width: 30%;
    height: auto;
    display: block;

    img {
      height: auto;
    }


  }

  .card-body-text {
    h2 {
      font-family: 'Poppins', sans-serif;
      font-size: 16px;
      font-weight: 600;
      color: #fff;
    }

    p {
      color: #fff;
      font-family: 'Poppins', sans-serif;
      font-size: 14px;
      font-weight: 300;
      text-space: 1px;
    }
  }
}

.col-md-3:nth-child(1) {
  .card {
    img {
      width: 60%;
    }
  }
}

.col-md-3:nth-child(2) {
  .card {
    img {
      width: 73%;
    }
  }
}

.col-md-3:nth-child(3) {
  .card {
    img {
      width: 42%;
    }
  }
}

.col-md-3:nth-child(4) {
  .card {
    img {
      width: 40%;
    }
  }
}

.main {
  margin-top: 250px;

  .text-right {
    color: #2d2d2d;
    font-size: 18px;
    font-weight: 500;
    font-family: 'Poppins', sans-serif;
    margin-top: 150px;
    margin-bottom: 40px;
  }
}

.img-right-bg {
  position: relative;
  transition: background-color 0.3s ease;

  .img-bg-body {
    overflow: hidden;

    transition: background-color 0.3s ease;

    img {
      width: 100%;
      height: auto;
      transition: all 1s ease;
      position: relative;
      z-index: -1;
    }

    display: block;
    cursor: pointer;

    &:hover {
      background: #2b2b2a87;
      cursor: pointer;

      img {
        transform: scale(1.1);
      }
    }
  }

  :hover {
    .img-bg-body {
      background: #2b2b2a87;
      cursor: pointer;
    }
  }
}

.img-right-bg::before {
  font-family: 'Poppins', sans-serif;
  font-size: 50px;
  font-weight: 700;
  color: #2d2d2d;
  content: "Architecture studio";
  position: absolute;
  right: -70%;
  top: 10%;
}

.button {
  text-align: center;
  text-decoration: none;
  padding: 6px 55px;
  border: 2px solid #2d2d2d;
  color: #2d2d2d;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 500;
  transition: all 0.5s ease;
  position: relative;
}

.button:hover {
  transition: all 0.5s ease;
  background-color: #2d2d2d;
  color: #fff;
}

</style>
