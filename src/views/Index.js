/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";

import IndexNavbar from "components/Navbars/IndexNavbar.js";
import Footer from "components/Footers/Footer.js";

export default function Index() {
  return (
    <>
      <IndexNavbar fixed />
      <section className="header relative pt-16 items-center flex h-screen max-h-860-px">
        <div className="container mx-auto items-center flex flex-wrap">
          <div className="w-full md:w-8/12 lg:w-6/12 xl:w-6/12 px-4">
            <div className="pt-32 sm:pt-0">
              <h2 className="font-semibold text-4xl text-blueGray-600">
دورة السى شارب الأولى فى العالم العربى
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
              هناك نمط لكل شيء في حياتنا اليوميَّة. يعمل الكون بطريقةٍ يُمكِن التنبؤ بها لحدٍّ ما، فمثلًا: تعاقب الليل والنهار، الفصول، شروق الشمس وغروبها ...إلخ. يَعيش الناس بشكِل روتيني، كالاستيقاظ صباحًا ثُم التوجُّه إلى المدرسة أو العمل. نتلقى تعليمات من أشخاصٍ آخرين كمُشريفنا في العمل. يُمكن شَرح كيفيَّة طَهوِنا لوصفة معينة بسلسلة محدودة من الخطوات. ثانيًا، في كُل مرَّة نستخدم أجهزتنا الذكيَّة تعمل العديد من الأكواد في الخلفيَّة. قد يبدو تَحريك مُؤشِّر الفأرة من موضعٍ لآخر شيئًا بسيطًا، إلّا أنَّه حقيقةً يُنتِج تشغيل العديد من الأكواد. شيء بسيط ككتابة بعض الأحرف في موقع مُستندات جوجل يؤدي إلى تنفيذ عشرات الأكواد في الخلفيَّة. كُل شيء مكوَّن من الأكواد في كُل مكان.
              </p>
              <div className="mt-12">
                <a
                  href=""
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  البداية
                </a>
              </div>
            </div>
          </div>
        </div>

        <img
          className="absolute top-0 b-auto right-0 pt-16 sm:w-6/12 -mt-48 sm:mt-0 w-10/12 max-h-860px"
          src="https://2.bp.blogspot.com/-YGTnkvL3s3A/W6E7M7vUwrI/AAAAAAAAAIQ/sgvs3nyjGA0aZ0Y7CVKVEmfZyZD33Ps4gCLcBGAs/s640/1*2ZcT0N7-WfVuFmhEnGvChA.png"
          alt="..."
        />
      </section>

      <section className="mt-48 md:mt-40 pb-40 relative bg-blueGray-100">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-100 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center">
            <div className="w-10/12 md:w-6/12 lg:w-4/12 px-12 md:px-4 mr-auto ml-auto -mt-32">
              <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg bg-lightBlue-500">
                <img
                  alt="..."
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80"
                  className="w-full align-middle rounded-t-lg"
                />
                <blockquote className="relative p-8 mb-4">
                  <svg
                    preserveAspectRatio="none"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 583 95"
                    className="absolute left-0 w-full block h-95-px -top-94-px"
                  >
                    <polygon
                      points="-30,95 583,95 583,65"
                      className="text-lightBlue-500 fill-current"
                    ></polygon>
                  </svg>
                  <h4 className="text-xl font-bold text-white">
                    تعريف لغة السى شارب
                  </h4>
                  <p className="text-md font-light mt-2 text-white">
                  سي# (بالإنجليزية: #C)‏ (تلفظ سي شارب/see sharp) هي لغة برمجة متعددة الأنماط تتمتع بكونها سكونية التنميط وأمرية وتعريفية ووظيفية وتعتبر كائنية التوجُّه أو البرمجة الشيئية (بالإنجليزية: (Object-oriented programming - OOP) وعمومية وشيئية المنحى (غرضية التوجه) (باستخدام الفئات) كما تخضع لمبادئ البرمجة التركيبية المنحى.

قامت مايكروسوفت بتطوير هذه اللغة في إطار عملها على تطوير دوت نِت وتمت الموافقة على تعييرها من منظمة Ecma (المعيار Ecma-334) والمنظمة الدولية للمعايير (المعيار ISO/IEC 23270:2006). إن سي شارب إحدى لغات البرمجة المصممة للعمل على البنية التحتية المشتركة للغات البرمجة (CLI). صُممت لغة سي شارب لتكون لغة بسيطة وحديثة وعامة الأغراض وشيئية المنحى. وقد قاد أندرس هيلسبرغ فريق تطويرها.

الإصدار الأحدث من اللغة هو C# 10 وطرح في نوفمبر 2021 .
                  </p>
                </blockquote>
              </div>
            </div>

            <div className="w-full md:w-6/12 px-4">
              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-sitemap"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        أساسيات السى شارب
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                       تعد الأساسيات فى لغة شيئا مهما فى تعلم اللغة، وبالتالى أساسيات لغة السى شارب شئ مهم لكى تكون مبرمجا ناجحا
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-drafting-compass"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        مكتبات السى شارب
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        تعد السى شارب بيئة خصبة لتصميم مكتبات جاهزة تساعد المبرمجين فى تنفيد المشاريع الكبيرة فى أقل وقت ممكن 
                      </p>
                    </div>
                  </div>
                </div>
                <div className="w-full md:w-6/12 px-4">
                  <div className="relative flex flex-col min-w-0 mt-4">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-newspaper"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">مجال السى شارب</h6>
                      <p className="mb-4 text-blueGray-500">
                        تعتبر لغة السى شارب بيئة متكاملة فى جميع جوانب العلوم البرمجية من برامج سطح المكتب والويب والهاتف المحمول
                      </p>
                    </div>
                  </div>
                  <div className="relative flex flex-col min-w-0">
                    <div className="px-4 py-5 flex-auto">
                      <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-white">
                        <i className="fas fa-file-alt"></i>
                      </div>
                      <h6 className="text-xl mb-1 font-semibold">
                        بيئة قواعد البيانات
                      </h6>
                      <p className="mb-4 text-blueGray-500">
                        من أهم المميزات التى تتمتع بها لغة السى شارب أنها يمكنها الربط مع معظم قواعد البيانات ولاسيما بيئة SQL
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container mx-auto overflow-hidden pb-20">
          <div className="flex flex-wrap items-center">
            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-sitemap text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                أهم المجالات داخل الموقع
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                لاسيما بعد تعلم الأساسيات تحب أن تنتج برامج محلية تعطيك فائدة وحافز لاستكمال المجالات التى يحتاجها سوق البرمجة 
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  C# windows Form apps
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  devexpress 
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Web
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                mobile
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Serenity
                </span>
                {/* <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Pagination
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Progressbars
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  Typography
                </span> */}
              </div>
              <a
                href=""
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                مشاهدة الكل{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>

            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto mt-32">
              <div className="relative flex flex-col min-w-0 w-full mb-6 mt-48 md:mt-0">
                <img
                  alt="..."
                  src={require("assets/img/component-btn.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-100-px z-3 left-145-px -top-29-px"
                />
                <img
                  alt="..."
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQULep-tETuQ6patOozlax3MVNlBscju2txNA&usqp=CAU"
                  className="w-full align-middle rounded-lg absolute shadow-lg -top-160-px left-260-px max-w-210-px"
                />
                <img
                  alt="..."
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT57_gahpS9ToVXcRSFa1aTkzhTl-1QSv9BTA&usqp=CAU"
                  className="w-full align-middle rounded-lg absolute shadow-lg max-w-180-px -top-225-px left-40-px z-2"
                />
                <img
                  alt="..."
                  src="data:image/png;base64,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 "
                  className="w-full align-middle rounded-lg absolute shadow-2xl max-w-200-px -left-50-px top-25-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-menu.png").default}
                  className="w-full align-middle rounded absolute shadow-lg max-w-580-px -left-20-px top-210-px"
                />
                <img
                  alt="..."
                  src={require("assets/img/component-btn-pink.png").default}
                  className="w-full align-middle rounded absolute shadow-xl max-w-120-px left-195-px top-95-px"
                />
              </div>
            </div>
          </div>

          <div className="flex flex-wrap items-center pt-32">
            <div className="w-full md:w-6/12 px-4 mr-auto ml-auto mt-32">
              <div className="justify-center flex flex-wrap relative">
                <div className="my-4 w-full lg:w-6/12 px-4">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/svelte/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-red-600 shadow-lg rounded-lg text-center ">
                      <img
                        alt="..."
                        className=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06U_cwCNR7dtBsQfay-3TJcQpx3OygH9SrQ&usqp=CAU"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        تصميمات رائعة
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-blueGray-600 shadow-lg rounded-lg text-center ">
                      <img
                        alt="..."
                        className=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAx3XtE4VqlW-Suah6txXrs-PPYTQKlX-Weg&usqp=CAU"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        نوافذ البداية
                      </p>
                    </div>
                  </a>
                  <a
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS06U_cwCNR7dtBsQfay-3TJcQpx3OygH9SrQ&usqp=CAU"
                    target="_blank"
                  >
                    <div className="bg-emerald-500 shadow-lg rounded-lg text-center ">
                      <img
                        alt="..."
                        className=""
                        src="data:image/jpeg;base64,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"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        عرض البيانات بشكل سهل
                      </p>
                    </div>
                  </a>
                </div>
                <div className="my-4 w-full lg:w-6/12 px-4 lg:mt-16">
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/js/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-teal-200 shadow-lg rounded-lg text-center ">
                      <img
                        alt="..."
                        className=""
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBV1XvTdGjXi-VdVjTC7-PFRcyomhWuSpJ2g&usqp=CAU"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        ادخال بيانات
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/angular/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-lightBlue-800 shadow-lg rounded-lg text-center ">
                      <img
                        alt="..."
                        className=""
                        src="data:image/jpeg;base64,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"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        متناسب مع جميع الشاشات
                      </p>
                    </div>
                  </a>
                  <a
                    href="https://www.creative-tim.com/learning-lab/tailwind/vue/alerts/notus?ref=vtw-index"
                    target="_blank"
                  >
                    <div className="bg-purple-500 shadow-lg rounded-lg text-center ">
                      <img
                        alt="..."
                        className=""
                        src="data:image/jpeg;base64,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"
                      />
                      <p className="text-lg text-white mt-4 font-semibold">
                        شاشة لتسجيل الدخول
                      </p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="w-full md:w-4/12 px-12 md:px-4 ml-auto mr-auto mt-48">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-drafting-compass text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                يناسب كل الفئات
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
                بيئة عمل متكاملة ومتطورة بحيث يناسب جميع مجالات البرمجة من برامج سطح المكتب الى الويب الى الهواتف
              </p>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-600">
               وأيضا مناسب لكل المستخدمين بحيث يوفر لك بيئة عمل متكاملة باستخدام قاعدة بيانات واحدة
              </p>
              <div className="block pb-6">
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  تسجيل الدخول
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  SQL server
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                إدخال البيانات
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  عرض البيانات
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  طباعة التقارير
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  تحليل البيانات
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  استيراد البيانات
                </span>
                <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-white uppercase last:mr-0 mr-2 mt-2">
                  تصدير البيانات
                </span>
              </div>
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind/react/alerts/notus?ref=nr-index"
                target="_blank"
                className="font-bold text-blueGray-700 hover:text-blueGray-500 ease-linear transition-all duration-150"
              >
                مشاهدة الكل{" "}
                <i className="fa fa-angle-double-right ml-1 leading-relaxed"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="container mx-auto px-4 pb-32 pt-48">
          <div className="items-center flex flex-wrap">
            <div className="w-full md:w-5/12 ml-auto px-12 md:px-4">
              <div className="md:pr-12">
                <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                  <i className="fas fa-file-alt text-xl"></i>
                </div>
                <h3 className="text-3xl font-semibold">
                  تمتع معنا بمشاريع برمجية متكاملة
                </h3>
                <p className="mt-4 text-lg leading-relaxed text-blueGray-500">
                يأتي هذا التميز للكثير من أمثلة الكود الكاملة التي تساعدك على البدء بشكل أسرع. يمكنك ضبط الألوان وكذلك لغة البرمجة. يمكنك تغيير النص والصور .
                </p>
                <ul className="list-none mt-6">
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fas fa-fingerprint"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          تم بناء الأكواد من قبل مطورين فى المجال
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="fab fa-html5"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          تم ضبط الأكواد بعناية فائقة
                        </h4>
                      </div>
                    </div>
                  </li>
                  <li className="py-2">
                    <div className="flex items-center">
                      <div>
                        <span className="text-xs font-semibold inline-block py-1 px-2 uppercase rounded-full text-blueGray-500 bg-blueGray-50 mr-3">
                          <i className="far fa-paper-plane"></i>
                        </span>
                      </div>
                      <div>
                        <h4 className="text-blueGray-500">
                          تنوع البيئات البرمجية
                        </h4>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="w-full md:w-6/12 mr-auto px-4 pt-24 md:pt-0">
              <img
                alt="..."
                className="max-w-full rounded-lg shadow-xl"
                style={{
                  transform:
                    "scale(1) perspective(1040px) rotateY(-11deg) rotateX(2deg) rotate(2deg)",
                }}
                src={require("assets/img/documentation.png").default}
              />
            </div>
          </div>
        </div>

        <div className="justify-center text-center flex flex-wrap mt-24">
          <div className="w-full md:w-6/12 px-12 md:px-4">
            <h2 className="font-semibold text-4xl">برامج ذات تنسيقات جميلة</h2>
            <p className="text-lg leading-relaxed mt-4 mb-4 text-blueGray-500">
              تم بناء برامجنا بأسلوب يتوافق مع جميع الفئات وقد راعينا الدقة فى تنفيذ الكود مع مرونة الإستخدام وعرض البيانات والمعلومات
            </p>
          </div>
        </div>
      </section>

      <section className="block relative z-1 bg-blueGray-600">
        <div className="container mx-auto">
          <div className="justify-center flex flex-wrap">
            <div className="w-full lg:w-12/12 px-4  -mt-24">
              <div className="flex flex-wrap">
                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Login Form
                  </h5>
                  <Link to="/auth/login">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZhQ6qUoTBuqSbzsPtWn-yPFQAMEUbODGMkw&usqp=CAU"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                  View reports
                  </h5>
                  <Link to="/profile">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQH3YNSbpQ1J5kOJnSzydDBOdtYCfqyhNtI0w&usqp=CAU"
                      />
                    </div>
                  </Link>
                </div>

                <div className="w-full lg:w-4/12 px-4">
                  <h5 className="text-xl font-semibold pb-4 text-center">
                    Landing Page
                  </h5>
                  <Link to="/landing">
                    <div className="hover:-mt-4 relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded-lg ease-linear transition-all duration-150">
                      <img
                        alt="..."
                        className="align-middle border-none max-w-full h-auto rounded-lg"
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkHgeZZQ2OJrEcCoP3sCeSo_IR4r__YzKlBw&usqp=CAU"
                      />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-blueGray-600 overflow-hidden">
        <div className="container mx-auto pb-64">
          <div className="flex flex-wrap justify-center">
            <div className="w-full md:w-5/12 px-12 md:px-4 ml-auto mr-auto md:mt-64">
              <div className="text-blueGray-500 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
                <i className="fas fa-code-branch text-xl"></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal text-white">
              مفتوح المصدر
              </h3>
              <p className="text-lg font-light leading-relaxed mt-4 mb-4 text-blueGray-400">
                تابعنا{" "}
                <a
                  href="https://tailwindcss.com/?ref=creativetim"
                  className="text-blueGray-300"
                  target="_blank"
                >
                  على جيت هب
                </a>{" "}
                بحيث تحصل على مشاريع مفتوحة المصدر من تصميمنا
              </p>
              <p className="text-lg font-light leading-relaxed mt-0 mb-4 text-blueGray-400">
                تعد أهم المشاريع التى تميزنا بها خلال الفترة الماضية
              </p>
              <a
                href=""
                target="_blank"
                className="github-star mt-4 inline-block text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
              >
                Github Star
              </a>
            </div>

            <div className="w-full md:w-4/12 px-4 mr-auto ml-auto mt-32 relative">
              <i className="fab fa-github text-blueGray-700 absolute -top-150-px -right-100 left-auto opacity-80 text-55"></i>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-16 bg-blueGray-200 relative pt-32">
        <div
          className="-mt-20 top-0 bottom-auto left-0 right-0 w-full absolute h-20"
          style={{ transform: "translateZ(0)" }}
        >
          <svg
            className="absolute bottom-0 overflow-hidden"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            version="1.1"
            viewBox="0 0 2560 100"
            x="0"
            y="0"
          >
            <polygon
              className="text-blueGray-200 fill-current"
              points="2560 0 2560 100 0 100"
            ></polygon>
          </svg>
        </div>

        <div className="container mx-auto">
          <div className="flex flex-wrap justify-center bg-white shadow-xl rounded-lg -mt-64 py-16 px-12 relative z-10">
            <div className="w-full text-center lg:w-8/12">
              <p className="text-4xl text-center">
                <span role="img" aria-label="love">
                  😍
                </span>
              </p>
              <h3 className="font-semibold text-3xl">
              هل تحب هذه المجموعة المبتدئة؟
              </h3>
              <p className="text-blueGray-500 text-lg leading-relaxed mt-4 mb-4">
          السبب إذا قمت بذلك، فقد يكون لك الآن. اضغط على الأزرار أدناه 
                 انتقل للحصول على الإصدار المجاني لمشروعك التالي. القيام بالبناء
                 تطبيق جديد أو إعطاء مشروع قديم نظرة جديدة!
              </p>
              <div className="sm:block flex flex-col mt-10">
                <a
                  href=""
                  target="_blank"
                  className="get-started text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-2 bg-lightBlue-500 active:bg-lightBlue-600 uppercase text-sm shadow hover:shadow-lg ease-linear transition-all duration-150"
                >
                  Get started
                </a>
                <a
                  href=""
                  target="_blank"
                  className="github-star sm:ml-1 text-white font-bold px-6 py-4 rounded outline-none focus:outline-none mr-1 mb-1 bg-blueGray-700 active:bg-blueGray-600 uppercase text-sm shadow hover:shadow-lg"
                >
                  <i className="fab fa-github text-lg mr-1"></i>
                  <span>Help With a Star</span>
                </a>
              </div>
              <div className="text-center mt-16"></div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
