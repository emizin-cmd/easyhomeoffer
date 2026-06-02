import { createFileRoute } from "@tanstack/react-router";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/terms-conditions")({
  component: TermsPage,
  head: () => ({
    meta: [
      { title: "Terms & Conditions | Twin Cities Home Buyers" },
      {
        name: "description",
        content:
          "Read the terms and conditions for Twin Cities Home Buyers text message program and services.",
      },
    ],
  }),
});

function TermsPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <SiteHeader />

      {/* Content */}
      <main className="mx-auto max-w-3xl px-6 py-16">
        <h1 className="font-heading text-3xl font-bold tracking-tight sm:text-4xl">
          Terms & Conditions
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Text Message Program Terms & Privacy Policy (&ldquo;Terms&rdquo;) Last updated: September 12, 2023
        </p>

        <div className="mt-10 space-y-10 text-sm leading-relaxed text-foreground/80">
          <section>
            <p>
              You agree to receive recurring automated marketing and informational text (e.g., SMS and MMS) messages from Twin Cities Home Buyers, Inc., including text messages that may be sent using an automatic telephone dialing system, to the mobile telephone number you provided when signing up or any other number that you designate. All the different types of messages you may receive (whether recurring marketing messages, on-demand reply messages, or otherwise) shall be known collectively as the &ldquo;Programs.&rdquo; Consent to receive automated marketing text messages is not a condition of any purchase. Msg & Data rates may apply.
            </p>
            <p className="mt-3">
              Message frequency will vary. Twin Cities Home Buyers, Inc. reserves the right to alter the frequency of messages sent at any time, so as to increase or decrease the total number of sent messages. Twin Cities Home Buyers, Inc. also reserves the right to change the short code or phone number from which messages are sent.
            </p>
            <p className="mt-3">
              Not all mobile devices or handsets may be supported and our messages may not be deliverable in all areas. Twin Cities Home Buyers, Inc., its service providers and the mobile carriers supported by the program are not liable for delayed or undelivered messages.
            </p>
            <p className="mt-3">
              BY OPTING IN TO OR PARTICIPATING IN ANY OF THE PROGRAMS, YOU ACCEPT AND AGREE TO THESE TERMS, INCLUDING, WITHOUT LIMITATION, YOUR AGREEMENT TO RESOLVE ANY DISPUTES THROUGH BINDING, INDIVIDUAL-ONLY ARBITRATION WITH JURY TRIAL AND CLASS ACTION WAIVERS, AS DETAILED IN THE &ldquo;DISPUTE RESOLUTION AND ARBITRATION AGREEMENT&rdquo; SECTION, BELOW (THE &ldquo;AGREEMENT&rdquo;).
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Cancellation
            </h2>
            <p className="mt-3">
              If you do not wish to continue participating in any Program or no longer agree to these Terms, you agree to text the applicable Short Code (or regular long code phone number where applicable) or directly reply to any mobile message received from a Program with STOP, END, CANCEL, UNSUBSCRIBE, or QUIT in order to opt out of that Program at any time. You may receive an additional mobile message confirming your decision to opt out. You understand and agree that the foregoing options are the only reasonable and exclusive methods of opting out. You also understand and agree that any other method of opting out, including, but not limited to, texting words or phrases other than those set forth above or verbally requesting Twin Cities Home Buyers, Inc. to remove you from our list, is not a reasonable means of opting out. You may be subscribed to multiple Programs across different Short Codes or regular long code phone numbers, and therefore you must separately text or reply STOP to each Short Code or long code phone number from which you wish to unsubscribe.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              General Terms for All Programs: Duty to Notify and Indemnify
            </h2>
            <p className="mt-3">
              If at any time, you intend to stop using the mobile telephone number that has been used with any Program, including canceling your service plan or selling or transferring the phone number to another party, you agree that you will complete the User Opt Out process set forth above prior to ending your use of the mobile telephone number. You understand and agree that your agreement to do so is a material part of these terms and conditions. You further agree that, if you discontinue the use of your mobile telephone number without notifying us of such change that you will be responsible for all costs (including attorneys&rsquo; fees) and liabilities incurred by us, or any party that assists in the delivery of the mobile messages, as a result of claims brought by individual(s) who are later assigned that mobile telephone number. This duty and agreement shall survive any cancellation or termination of your agreement to participate in any of our Programs.
            </p>
            <p className="mt-3">
              YOU AGREE THAT YOU SHALL INDEMNIFY, DEFEND AND HOLD US HARMLESS FROM ANY CLAIM OR LIABILITY RESULTING FROM YOUR FAILURE TO NOTIFY US OF A CHANGE IN THE INFORMATION YOU HAVE PROVIDED, INCLUDING ANY CLAIM OR LIABILITY UNDER THE TELEPHONE CONSUMER PROTECTION ACT (47 U.S.C. SEC. 227), AND ANY REGULATIONS PROMULGATED THEREUNDER RESULTING FROM US ATTEMPTING TO CONTACT YOU AT THE MOBILE TELEPHONE NUMBER YOU PROVIDED.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Cost
            </h2>
            <p className="mt-3">
              Message and data rates may apply. Check with your mobile operator for details.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Supported Carriers
            </h2>
            <p className="mt-3">
              <strong>U.S.:</strong> AT&T Wireless, Boost Mobile, Metro PCS, Sprint, T-Mobile, Tracfone, Verizon, Virgin Mobile USA, and C-Spire & Associated Carriers (carriers do not support MMS alerts, only SMS.)
            </p>
            <p className="mt-3">
              <strong>Canada:</strong> BCE Inc, MTS, Telus, Eastlink, Rogers, Freedom Mobile, SaskTel Mobility and Vid&eacute;otron. We may add or remove any carriers from any Program without notice. Also, Programs may not be available on all carriers. If your mobile operator is not supported, you will not receive a reply to your messages. Some operators may not support some services at the prices offered. Pre-paid users may not be able to participate – check with your mobile operator. Carriers are not liable for delayed or undelivered messages.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Support
            </h2>
            <p className="mt-3">
              For support regarding the Program, text &ldquo;HELP&rdquo; to the applicable Program&rsquo;s Short Code or email us at info@twincitieshomebuyers.com. Please note that the use of this email address, or texting &ldquo;HELP&rdquo; to the Program&rsquo;s Short Code is not an acceptable method of opting out of the program. Opt outs must be submitted in accordance with the procedures set forth above. In Canada, text &ldquo;INFO&rdquo; for contact information of the sender.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Our Disclaimer of Warranty
            </h2>
            <p className="mt-3">
              The Programs are offered on an &ldquo;as-is&rdquo; basis and may not be available in all areas at all times and may not continue to work in the event of product, software, coverage or other changes made by your wireless carrier. We will not be liable for any delays or failures in the receipt of any mobile messages connected with any Program. Delivery of mobile messages is subject to effective transmission from your wireless service provider/network operator, and is outside of our control. We are not liable for delayed or undelivered mobile messages.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Participant Device & Service Requirements
            </h2>
            <p className="mt-3">
              You must have a wireless device of your own, capable of 2-way messaging, be using a participating wireless carrier, and be a wireless service subscriber with text messaging service. Not all cellular phone providers carry the necessary service to participate. Check your phone capabilities for specific text messaging instructions.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Participant Age
            </h2>
            <p className="mt-3">
              Children under the age of 13 may not participate in any Program and parents or legal guardians may not agree to these Terms on their behalf. If we become aware that a child under 13 has provided or attempted to provide us with personal information, we will use our best efforts to remove the information permanently from our files. If you are under the age of 18 but at least 13 years of age, you may participate in any Program only under the supervision of a parent or legal guardian who agrees to be bound by these Terms. If you are a parent or legal guardian agreeing to these Terms for the benefit of a child between the ages of 13 and 18, be advised that you are fully responsible for his or her participation in any Program, including, without limitation, all legal liability that he or she may incur.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Privacy Policy
            </h2>
            <p className="mt-3">
              We respect your privacy. We will only use information you provide to transmit your mobile messages and respond to you, if necessary. This includes sharing information with our program partners, message content providers, phone companies, and vendors who assist us in the delivery of mobile messages. EXCEPT AS SET FORTH IN THIS SECTION, WE DO NOT SELL, RENT, LOAN, TRADE, LEASE OR OTHERWISE TRANSFER FOR PROFIT ANY PHONE NUMBERS OR CUSTOMER INFORMATION COLLECTED THROUGH PROGRAMS TO ANY THIRD PARTY. Nonetheless, we reserve the right at all times to disclose any information as necessary to satisfy any law, regulation or governmental request, to avoid liability, or to protect our rights or property. When you complete forms online or otherwise provide us information in connection with a Program, you agree to provide accurate, complete, and true information. You agree not to use a false or misleading name or a name that you are not authorized to use. If in our sole discretion, we believe that any such information is untrue, inaccurate, or incomplete, or you have opted into a Program for an ulterior purpose, we may refuse you access to the Program and pursue any appropriate legal remedies.
            </p>
            <p className="mt-3">
              This Privacy Policy and Terms and Conditions is strictly limited to these Programs and has no effect on any other privacy policy(ies) that may govern the relationship between you and us in other contexts.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Governing Law
            </h2>
            <p className="mt-3">
              This Agreement shall be governed by the laws of the State of New York, without reference to conflict of laws principles. Any suit to enforce this Agreement shall be brought exclusively in the State and U.S. District Courts located in Brooklyn, New York and the Parties hereby submit to the personal jurisdiction of such courts and waive any venue objection.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Miscellaneous
            </h2>
            <p className="mt-3">
              You warrant and represent to us that you have all necessary rights, power, and authority to agree to these Terms and perform your obligations hereunder, and nothing contained in this Agreement or in the performance of such obligations will place you in breach of any other contract or obligation. The failure of either party to exercise in any respect any right provided for herein will not be deemed a waiver of any further rights hereunder. If any provision of these Terms is found to be unenforceable or invalid, that provision will be limited or eliminated to the minimum extent necessary so that this Agreement will otherwise remain in full force and effect and enforceable. Any new features, changes, updates or improvements of any Program shall be subject to these Terms unless explicitly stated otherwise in writing. We reserve the right to change these Terms from time to time. Any updates to these Terms shall be communicated to you. You acknowledge your responsibility to review these Terms from time to time and to be aware of any such changes. By continuing to participate in any Program after any such changes, you accept these Terms, as modified.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Problems?
            </h2>
            <p className="mt-3">
              If you are experiencing any problems, please email us at info@twincitieshomebuyers.com and describe the issue you&rsquo;re having.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Contact
            </h2>
            <p className="mt-3">
              This message program is a service of Twin Cities Home Buyers, Inc. You may contact a company representative at info@twincitieshomebuyers.com.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Dispute Resolution
            </h2>

            <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
              General
            </h3>
            <p className="mt-3">
              In the interest of resolving disputes between you and Twin Cities Home Buyers, Inc. in the most expedient and cost effective manner, you and Twin Cities Home Buyers, Inc. agree that any dispute arising out of or in any way related to these messaging terms and conditions (&ldquo;Messaging Terms&rdquo;) or your receipt of text messages from Twin Cities Home Buyers, Inc. or its service providers will be resolved by binding arbitration. Arbitration is less formal than a lawsuit in court. Arbitration uses a neutral arbitrator instead of a judge or jury, may allow for more limited discovery than in court, and can be subject to very limited review by courts. Arbitrators can award the same damages and relief that a court can award. This agreement to arbitrate disputes includes all claims arising out of or in any way related to these Messaging Terms, or your receipt of text messages from Twin Cities Home Buyers, Inc. or its service providers whether based in contract, tort, statute, fraud, misrepresentation, or any other legal theory, and regardless of when a claim arises. YOU UNDERSTAND AND AGREE THAT, BY AGREEING TO THESE MESSAGING TERMS, YOU AND Twin Cities Home Buyers, Inc. ARE EACH WAIVING THE RIGHT TO A TRIAL BY JURY OR TO PARTICIPATE IN A CLASS ACTION AND THAT THESE MESSAGING TERMS SHALL BE SUBJECT TO AND GOVERNED BY THE FEDERAL ARBITRATION ACT.
            </p>

            <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
              Exceptions
            </h3>
            <p className="mt-3">
              Notwithstanding subsection (a) above, nothing in these Messaging Terms will be deemed to waive, preclude, or otherwise limit the right of you or Twin Cities Home Buyers, Inc. to: (i) bring an individual action in small claims court; (ii) pursue an enforcement action through the applicable federal, state, or local agency if that action is available; (iii) seek injunctive relief in aid of arbitration from a court of competent jurisdiction; or (iv) file suit in a court of law to address an intellectual property infringement claim.
            </p>

            <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
              Arbitrator
            </h3>
            <p className="mt-3">
              Any arbitration between you and Twin Cities Home Buyers, Inc. will be governed by the Federal Arbitration Act and the Commercial Dispute Resolution Procedures and Supplementary Procedures for Consumer Related Disputes (collectively, &ldquo;AAA Rules&rdquo;) of the American Arbitration Association (&ldquo;AAA&rdquo;), as modified by these Messaging Terms, and will be administered by the AAA. The AAA Rules and filing forms are available online at www.adr.org, by calling the AAA at 1-800-778-7879, or by contacting Twin Cities Home Buyers, Inc. The arbitrator has exclusive authority to resolve any dispute relating to the interpretation, applicability, or enforceability of this binding arbitration agreement.
            </p>

            <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
              Notice; Process
            </h3>
            <p className="mt-3">
              If you or Twin Cities Home Buyers, Inc. intends to seek arbitration, then the party seeking arbitration must first send a written notice of the dispute to the other party by U.S. Mail (&ldquo;Notice&rdquo;). Twin Cities Home Buyers, Inc. address for Notice is: 665 Fifth Avenue, 8th Floor, New York, New York 10022, Attn: Chief Executive Officer. The Notice must: (i) describe the nature and basis of the claim or dispute; and (ii) set forth the specific relief sought (&ldquo;Demand&rdquo;). You and Twin Cities Home Buyers, Inc. will make good faith efforts to resolve the claim directly, but if you and Twin Cities Home Buyers, Inc. do not reach an agreement to do so within 30 days after the Notice is received, you or Twin Cities Home Buyers, Inc. may commence an arbitration proceeding. During the arbitration, the amount of any settlement offer made by you or Twin Cities Home Buyers, Inc. must not be disclosed to the arbitrator until after the arbitrator makes a final decision and award, if any.
            </p>

            <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
              Fees
            </h3>
            <p className="mt-3">
              If you commence arbitration in accordance with these Messaging Terms, Twin Cities Home Buyers, Inc. will reimburse you for your payment of the filing fee, unless your claim is for more than $15,000 or as set forth below, in which case the payment of any fees will be decided by the AAA Rules. If the claim is for $15,000 or less, you may choose whether the arbitration will be conducted: (i) solely on the basis of documents submitted to the arbitrator; (ii) through a non-appearance based telephone hearing; or (iii) by an in-person hearing as established by the AAA Rules. If the arbitrator finds that either the substance of your claim or the relief sought in the Demand is frivolous or brought for an improper purpose (as measured by the standards set forth in Federal Rule of Civil Procedure 11(b)), then the payment of all fees will be governed by the AAA Rules. In that case, you agree to reimburse Twin Cities Home Buyers, Inc. for all monies previously disbursed by it that are otherwise your obligation to pay under the AAA Rules. Regardless of the manner in which the arbitration is conducted, the arbitrator must issue a reasoned written decision sufficient to explain the essential findings and conclusions on which the decision and award, if any, are based. You and Twin Cities Home Buyers, Inc. agree that such written decision, and information exchanged during arbitration, will be kept confidential except to the extent necessary to enforce or permit limited judicial review of the award. The arbitrator may make rulings and resolve disputes as to the payment and reimbursement of fees or expenses at any time during the proceeding and upon request from you or Twin Cities Home Buyers, Inc. made within 14 days of the arbitrator&rsquo;s ruling on the merits.
            </p>

            <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
              No Class Actions
            </h3>
            <p className="mt-3">
              YOU AND Twin Cities Home Buyers, Inc. AGREE THAT EACH MAY BRING CLAIMS AGAINST THE OTHER ONLY IN AN INDIVIDUAL CAPACITY AND NOT AS A PLAINTIFF OR CLASS MEMBER IN ANY PURPORTED CLASS OR REPRESENTATIVE PROCEEDING. Further, unless both you and Twin Cities Home Buyers, Inc. agree otherwise in a signed writing, the arbitrator may not consolidate more than one person&rsquo;s claims, and may not otherwise preside over any form of a representative or class proceeding.
            </p>

            <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
              Modifications to this Arbitration Provision
            </h3>
            <p className="mt-3">
              Notwithstanding anything to the contrary in these Messaging Terms, if Twin Cities Home Buyers, Inc. makes any future change to this arbitration provision, other than a change to Twin Cities Home Buyers, Inc. address for Notice, you may reject the change by sending us written notice within 30 days of the change to Twin Cities Home Buyers, Inc. address for Notice, in which case this arbitration provision, as in effect immediately prior to the changes you rejected, will continue to govern any disputes between you and Twin Cities Home Buyers, Inc.
            </p>

            <h3 className="mt-4 font-heading text-base font-semibold text-foreground">
              Enforceability
            </h3>
            <p className="mt-3">
              If an arbitrator decides that applicable law precludes enforcement of any of the limitations of subsection (f) above (addressing class, representative and consolidated proceedings) as to a particular claim for relief, then that claim (and only that claim) must be severed from the arbitration and brought in court. If any other provision of these Messaging Terms is found to be unenforceable, the applicable provision shall be deemed stricken and the remainder of these Messaging Terms shall remain in full force and effect.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Changes to Messaging Terms
            </h2>
            <p className="mt-3">
              We reserve the right to terminate or change our messaging program at any time. We also reserve the right to change these Messaging Terms at any time and such changes will be effective immediately upon posting. Your continued enrollment following such changes shall constitute your acceptance of such changes.
            </p>
          </section>

          <section className="border-t border-border pt-10">
            <p className="font-semibold text-foreground">Twin Cities Home Buyers, Inc.</p>
            <p className="mt-1 text-muted-foreground">Brooklyn Park, MN USA</p>
          </section>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}
