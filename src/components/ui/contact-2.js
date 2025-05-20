import React from "react";
import { useLanguage } from "../../context/LanguageContext";
import { Button } from "./button";
import { Input } from "./input";
import { Label } from "./label";
import { Textarea } from "./textarea";

export const Contact2 = ({
  title,
  description,
  phone,
  email,
  web,
}) => {
  const { messages } = useLanguage();
  
  return (
    <section className="py-32">
      <div className="container">
        <div className="mx-auto flex max-w-screen-xl flex-col justify-between gap-10 lg:flex-row lg:gap-20">
          <div className="mx-auto flex max-w-sm flex-col justify-between gap-10">
            <div className="text-center lg:text-left">
              <h1 className="mb-2 text-5xl font-semibold lg:mb-1 lg:text-6xl">
                {title}
              </h1>
              <p className="text-muted-foreground">{description}</p>
            </div>
            <div className="mx-auto w-fit lg:mx-0">
              <h3 className="mb-6 text-center text-2xl font-semibold lg:text-left">
                {messages.contactDetailTitle || "Contact Details"}
              </h3>
              <ul className="ml-4 list-disc">
                <li>
                  <span className="font-bold">{messages.footerPhone || "Phone"}: </span>
                  {phone}
                </li>
                <li>
                  <span className="font-bold">{messages.footerEmail || "Email"}: </span>
                  <a href={`mailto:${email}`} className="underline">
                    {email}
                  </a>
                </li>
                <li>
                  <span className="font-bold">{messages.footerAddress || "Address"}: </span>
                  <span>{web.label}</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="mx-auto flex max-w-screen-md flex-col gap-6 rounded-lg border p-10">
            <div className="flex gap-4">
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="firstname">{messages.formFirstNameLabel || "First Name"}</Label>
                <Input type="text" id="firstname" placeholder={messages.formFirstNamePlaceholder || "First Name"} />
              </div>
              <div className="grid w-full items-center gap-1.5">
                <Label htmlFor="lastname">{messages.formLastNameLabel || "Last Name"}</Label>
                <Input type="text" id="lastname" placeholder={messages.formLastNamePlaceholder || "Last Name"} />
              </div>
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="email">{messages.formEmailLabel || "Email"}</Label>
              <Input type="email" id="email" placeholder={messages.formEmailPlaceholder || "Email"} />
            </div>
            <div className="grid w-full items-center gap-1.5">
              <Label htmlFor="subject">{messages.formSubjectLabel || "Subject"}</Label>
              <Input type="text" id="subject" placeholder={messages.formSubjectPlaceholder || "Subject"} />
            </div>
            <div className="grid w-full gap-1.5">
              <Label htmlFor="message">{messages.formProjectLabel || "Message"}</Label>
              <Textarea placeholder={messages.formProjectPlaceholder || "Type your message here."} id="message" />
            </div>
            <Button className="w-full" style={{ backgroundColor: "#0c1220", color: "white" }}>
              {messages.formSubmit || "Send Message"}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};