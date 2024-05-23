import React from "react";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { Tag } from "../../components/Tag";
import { CalenderAlt22 } from "../../icons/CalenderAlt22";
import { CommentsAlt1 } from "../../icons/CommentsAlt1";
import { EyeAlt3 } from "../../icons/EyeAlt3";
import { FacebookLine1 } from "../../icons/FacebookLine1";
import { Quotation3 } from "../../icons/Quotation3";
import { Twitter } from "../../icons/Twitter";

export const OlioBlogTemplate = () => {
  return (
    <div className="relative w-[1440px] h-[2366px] bg-whitewhite">
      <div className="absolute w-[1170px] h-[562px] top-[120px] left-[135px] bg-[url(https://c.animaapp.com/skapRSQn/img/rectangle-4381-1.png)] bg-cover bg-[50%_50%]">
        <div className="absolute w-[1170px] h-[562px] top-0 left-0 rounded-[5px] [background:linear-gradient(180deg,rgba(48,86,211,0)_46.88%,rgba(13.03,21.39,48.87,0.75)_93.23%)]" />
        <div className="inline-flex items-center gap-[40px] absolute top-[492px] left-[30px]">
          <div className="inline-flex items-center gap-[15px] relative flex-[0_0_auto]">
            <img
              className="relative w-[40px] h-[40px]"
              alt="Ellipse"
              src="https://c.animaapp.com/skapRSQn/img/ellipse-2714-2@2x.png"
            />
            <div className="relative w-fit font-body-medium-medium font-[number:var(--body-medium-medium-font-weight)] text-whitewhite text-[length:var(--body-medium-medium-font-size)] tracking-[var(--body-medium-medium-letter-spacing)] leading-[var(--body-medium-medium-line-height)] whitespace-nowrap [font-style:var(--body-medium-medium-font-style)]">
              By Laurie Waller
            </div>
          </div>
          <div className="inline-flex items-start gap-[25px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
              <CalenderAlt22 className="!relative !w-[16px] !h-[16px]" color="white" />
              <div className="relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-whitewhite text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                8 May 2024
              </div>
            </div>
            <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
              <CommentsAlt1 className="!relative !w-[16px] !h-[16px]" color="white" />
              <div className="relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-whitewhite text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                09
              </div>
            </div>
            <div className="inline-flex items-center gap-[12px] relative flex-[0_0_auto]">
              <EyeAlt3 className="!relative !w-[16px] !h-[16px]" color="white" />
              <div className="relative w-fit mt-[-1.00px] font-body-small-medium font-[number:var(--body-small-medium-font-weight)] text-whitewhite text-[length:var(--body-small-medium-font-size)] tracking-[var(--body-small-medium-letter-spacing)] leading-[var(--body-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-small-medium-font-style)]">
                35
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-[40px] absolute top-[732px] left-[135px]">
        <div className="inline-flex flex-col items-start gap-[40px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
            <div className="inline-flex flex-col items-start gap-[30px] relative flex-[0_0_auto]">
              <p className="relative w-[745px] mt-[-1.00px] [font-family:'Inter',Helvetica] font-bold text-darkdark text-[35px] tracking-[0] leading-[45px]">
                Celebrating Laurie Waller’s AWS Developer Associate Certification
              </p>
              <div className="inline-flex flex-col items-start gap-[25px] relative flex-[0_0_auto]">
                <p className="relative w-[745px] mt-[-1.00px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
                  There’s a time and place for everything… including asking for reviews. For instance: you should not
                  asking for a review on your checkout page. The sole purpose of this page is to guide your customer to
                  complete their purchase, and this means that the page should be as minimalist and pared-down possible.
                  You don’t want to have any unnecessary elements or Call To Actions.
                </p>
                <p className="relative w-[745px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
                  There’s a time and place for everything… including asking for reviews. For instance: you should not
                  asking for a review on your checkout page. The sole purpose of this page is to guide your customer to
                  complete their purchase, and this means that the page should be as minimalist and pared-down possible.
                  You don’t want to have any unnecessary elements or Call To Actions.
                </p>
              </div>
            </div>
            <div className="inline-flex flex-col items-start gap-[25px] relative flex-[0_0_auto]">
              <p className="relative w-fit mt-[-1.00px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-darkdark text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                AWS Developer Associate Bolsters Technical Abilities
              </p>
              <p className="relative w-[745px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
                At quo cetero fastidii. Usu ex ornatus corpora sententiae, vocibus deleniti ut nec. Ut enim eripuit
                eligendi est, in iracundia signiferumque quo. Sed virtute suavitate suscipiantur ea, dolor this can
                eloquentiam ei pro. Suas adversarium interpretaris eu sit, eum viris impedit ne.
              </p>
            </div>
          </div>
          <div className="relative w-[745px] h-[251px] bg-[#2f56d30d] rounded-[5px] bg-[url(https://c.animaapp.com/skapRSQn/img/group-1000001886-2.png)] bg-[100%_100%]">
            <div className="absolute w-[655px] h-[138px] top-[89px] left-[45px]">
              <div className="absolute top-[101px] left-[327px] [font-family:'Inter',Helvetica] font-normal italic text-primary-text-color text-[12px] text-center tracking-[0] leading-[20px] whitespace-nowrap">
                {""}
              </div>
              <p className="absolute w-[655px] top-0 left-0 [font-family:'Inter',Helvetica] font-normal italic text-darkdark text-[16px] text-center tracking-[0] leading-[27.5px]">
                Securing the AWS Developer Associate certification significantly enhanced my proficiency in deploying,
                managing, and operating scalable systems on AWS. It not only bolstered my technical skills but also
                built up my strategic approach to cloud solutions, fostering both personal and professional growth and
                ensuring our team can deliver top-notch results..
              </p>
            </div>
            <Quotation3 className="!absolute !w-[46px] !h-[46px] !top-[30px] !left-[349px]" color="#3758F9" />
          </div>
          <div className="inline-flex flex-col items-start gap-[25px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-darkdark text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
              3rd Sub Headline
            </div>
            <p className="relative w-[745px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
              At quo cetero fastidii. Usu ex ornatus corpora sententiae, vocibus deleniti ut nec. Ut enim eripuit
              eligendi est, in iracundia signiferumque quo. Sed virtute suavitate suscipiantur ea, dolor this can
              eloquentiam ei pro Suas adversarium interpretaris.
            </p>
            <p className="relative w-[745px] font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-primary-text-color text-[length:var(--body-medium-regular-font-size)] tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
              At quo cetero fastidii. Usu ex ornatus corpora sententiae, vocibus deleniti ut nec. Ut enim eripuit
              eligendi est, in iracundia signiferumque quo. Sed virtute suavitate suscipiantur ea, dolor this can
              eloquentiam ei pro. Suas adversarium interpretaris eu sit, eum viris impedit ne.
            </p>
          </div>
        </div>
        <div className="flex w-[745px] items-end justify-between relative flex-[0_0_auto]">
          <div className="inline-flex items-start gap-[12px] relative flex-[0_0_auto]">
            <Tag className="!flex-[0_0_auto]" state="hover" text="Design" />
            <Tag className="!flex-[0_0_auto]" state="default" text="Development" />
            <Tag className="!flex-[0_0_auto]" state="default" text="info" />
          </div>
          <div className="inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
            <div className="relative w-fit font-body-extra-small-medium font-[number:var(--body-extra-small-medium-font-weight)] text-primary-text-color text-[length:var(--body-extra-small-medium-font-size)] tracking-[var(--body-extra-small-medium-letter-spacing)] leading-[var(--body-extra-small-medium-line-height)] whitespace-nowrap [font-style:var(--body-extra-small-medium-font-style)]">
              Share This Post
            </div>
            <div className="inline-flex items-center gap-[10px] relative flex-[0_0_auto]">
              <div className="relative w-[32px] h-[32px] bg-[url(https://c.animaapp.com/skapRSQn/img/oval-4.svg)] bg-[100%_100%]">
                <FacebookLine1 className="!absolute !w-[20px] !h-[20px] !top-[6px] !left-[6px]" color="white" />
              </div>
              <div className="relative w-[32px] h-[32px] bg-[url(https://c.animaapp.com/skapRSQn/img/oval-5.svg)] bg-[100%_100%]">
                <Twitter className="!absolute !w-[20px] !h-[20px] !top-[6px] !left-[6px]" color="white" />
              </div>
              <img
                className="relative w-[32px] h-[32px]"
                alt="Element"
                src="https://c.animaapp.com/skapRSQn/img/145807-2@2x.png"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="inline-flex flex-col items-start gap-[40px] absolute top-[732px] left-[935px]">
        <div className="relative w-[370px] h-[392px]">
          <div className="relative h-[392px] rounded-[5px]">
            <div className="absolute w-[370px] h-[392px] top-0 left-0 bg-primary-color rounded-[5px] overflow-hidden">
              <img
                className="absolute w-[46px] h-[47px] top-0 left-[324px]"
                alt="Dotted shape"
                src="https://c.animaapp.com/skapRSQn/img/dotted-shape-2@2x.png"
              />
              <div className="absolute w-[64px] h-[64px] top-[347px] left-[-19px]">
                <img
                  className="absolute w-[45px] h-[45px] top-0 left-[19px]"
                  alt="Dotted shape"
                  src="https://c.animaapp.com/skapRSQn/img/dotted-shape-3@2x.png"
                />
              </div>
            </div>
            <div className="inline-flex flex-col items-center gap-[20px] absolute top-[65px] left-[45px]">
              <div className="inline-flex flex-col items-center gap-[6px] relative flex-[0_0_auto]">
                <div className="relative w-fit mt-[-1.00px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-whitewhite text-[length:var(--heading-5-font-size)] text-center tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
                  Join our newsletter!
                </div>
                <p className="relative w-fit font-body-medium-regular font-[number:var(--body-medium-regular-font-weight)] text-whitewhite text-[length:var(--body-medium-regular-font-size)] text-center tracking-[var(--body-medium-regular-letter-spacing)] leading-[var(--body-medium-regular-line-height)] [font-style:var(--body-medium-regular-font-style)]">
                  Enter your email to receive our <br />
                  latest newsletter.
                </p>
              </div>
              <div className="inline-flex flex-col items-center gap-[15px] relative flex-[0_0_auto]">
                <div className="inline-flex flex-col items-start gap-[15px] relative flex-[0_0_auto]">
                  <Input
                    className="!flex !w-[280px]"
                    divClassName="!text-whitewhite !opacity-60"
                    frameClassName="!justify-center"
                    helperText="off"
                    label="off"
                    placeholder="Your email address"
                    placeholderClassName="!border-[#ffffff1a] !h-[48px] !rounded-[5px] !justify-center !flex-[unset] !shadow-[0px_4px_42px_#00000003] !grow-[unset] !bg-[#ffffff2b]"
                    rightIcon="off"
                    state="default"
                    status="default"
                  />
                  <Button
                    buttonText="Subscribe Now"
                    className="!flex-[0_0_auto] !flex !w-[280px]"
                    color="secondary"
                    kind="primary"
                    round="semi-round"
                    state="default"
                  />
                </div>
                <p className="relative w-fit [font-family:'Inter',Helvetica] font-medium text-whitewhite text-[14px] text-center tracking-[0] leading-[22px] whitespace-nowrap">
                  Don&#39;t worry, we don&#39;t spam
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="inline-flex flex-col items-start gap-[35px] relative flex-[0_0_auto]">
          <div className="inline-flex flex-col items-start gap-[20px] relative flex-[0_0_auto]">
            <div className="relative w-fit mt-[-1.00px] font-heading-5 font-[number:var(--heading-5-font-weight)] text-darkdark text-[length:var(--heading-5-font-size)] tracking-[var(--heading-5-letter-spacing)] leading-[var(--heading-5-line-height)] whitespace-nowrap [font-style:var(--heading-5-font-style)]">
              Popular Articles
            </div>
            <img
              className="relative w-[82px] h-[2px] mb-[-0.50px] ml-[-1.00px]"
              alt="Line"
              src="https://c.animaapp.com/skapRSQn/img/line-2.svg"
            />
          </div>
          <div className="inline-flex flex-col items-start gap-[20px] relative flex-[0_0_auto]">
            <div className="inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
              <div className="relative w-[80px] h-[80px] bg-[url(https://c.animaapp.com/skapRSQn/img/mask@2x.png)] bg-cover bg-[50%_50%]" />
              <div className="inline-flex flex-col items-start gap-[6px] relative flex-[0_0_auto]">
                <div className="relative w-[269px] mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-darkdark text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                  Article 1
                </div>
                <div className="relative w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                  Name 1
                </div>
              </div>
            </div>
            <img
              className="relative w-[370px] h-[2px] ml-[-0.50px] mr-[-0.50px]"
              alt="Line"
              src="https://c.animaapp.com/skapRSQn/img/line-5-1.svg"
            />
            <div className="inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
              <div className="bg-[url(https://c.animaapp.com/skapRSQn/img/mask-1@2x.png)] relative w-[80px] h-[80px] bg-cover bg-[50%_50%]" />
              <div className="inline-flex flex-col items-start gap-[6px] relative flex-[0_0_auto]">
                <div className="text-primary-color relative w-[269px] mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                  Article 2
                </div>
                <div className="relative w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                  Name 2
                </div>
              </div>
            </div>
            <img
              className="relative w-[370px] h-[2px] ml-[-0.50px] mr-[-0.50px]"
              alt="Line"
              src="https://c.animaapp.com/skapRSQn/img/line-5-1.svg"
            />
            <div className="inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
              <div className="bg-[url(https://c.animaapp.com/skapRSQn/img/mask-2@2x.png)] relative w-[80px] h-[80px] bg-cover bg-[50%_50%]" />
              <div className="inline-flex flex-col items-start gap-[6px] relative flex-[0_0_auto]">
                <div className="relative w-[269px] mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-darkdark text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                  Article 3
                </div>
                <div className="relative w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                  Name 3
                </div>
              </div>
            </div>
            <img
              className="relative w-[370px] h-[2px] ml-[-0.50px] mr-[-0.50px]"
              alt="Line"
              src="https://c.animaapp.com/skapRSQn/img/line-5-1.svg"
            />
            <div className="inline-flex items-center gap-[20px] relative flex-[0_0_auto]">
              <div className="bg-[url(https://c.animaapp.com/skapRSQn/img/mask-3@2x.png)] relative w-[80px] h-[80px] bg-cover bg-[50%_50%]" />
              <div className="inline-flex flex-col items-start gap-[6px] relative flex-[0_0_auto]">
                <div className="h-[48px] text-darkdark relative w-[269px] mt-[-1.00px] font-body-large-medium font-[number:var(--body-large-medium-font-weight)] text-[length:var(--body-large-medium-font-size)] tracking-[var(--body-large-medium-letter-spacing)] leading-[var(--body-large-medium-line-height)] [font-style:var(--body-large-medium-font-style)]">
                  Article 4
                </div>
                <div className="relative w-fit font-body-small-regular font-[number:var(--body-small-regular-font-weight)] text-primary-text-color text-[length:var(--body-small-regular-font-size)] tracking-[var(--body-small-regular-letter-spacing)] leading-[var(--body-small-regular-line-height)] whitespace-nowrap [font-style:var(--body-small-regular-font-style)]">
                  Name 4
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-[372px] h-[230px] mr-[-2.00px]">
          <div className="relative w-[370px] h-[230px] bg-[url(https://c.animaapp.com/skapRSQn/img/rectangle-4392@2x.png)] bg-cover bg-[50%_50%]">
            <p className="absolute top-[100px] left-[29px] font-heading-6 font-[number:var(--heading-6-font-weight)] text-whitewhite text-[length:var(--heading-6-font-size)] text-center tracking-[var(--heading-6-letter-spacing)] leading-[var(--heading-6-line-height)] whitespace-nowrap [font-style:var(--heading-6-font-style)]">
              Banner Ad For Olio Service
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
