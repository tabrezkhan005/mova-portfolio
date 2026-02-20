"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  FileText,
  Shield,
  CreditCard,
  Users,
  Gift,
  ChevronDown,
  ChevronRight,
  Download,
  ArrowUp,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  TYPES                                                              */
/* ------------------------------------------------------------------ */
interface PolicyDocument {
  id: string;
  title: string;
  shortTitle: string;
  icon: React.ReactNode;
  lastUpdated: string;
  pdfPath: string;
  sections: Section[];
}

interface Section {
  id: string;
  title: string;
  content: React.ReactNode;
}

/* ------------------------------------------------------------------ */
/*  POLICY DATA                                                        */
/* ------------------------------------------------------------------ */
const policies: PolicyDocument[] = [
  /* ============================================================== */
  /*  1. Platform Terms of Use                                       */
  /* ============================================================== */
  {
    id: "platform-terms",
    title: "Platform Terms of Use",
    shortTitle: "Terms of Use",
    icon: <FileText className="w-5 h-5" />,
    lastUpdated: "18 February 2026",
    pdfPath: "/terms&conditions/Platform Terms of Use - MOVA.pdf",
    sections: [
      {
        id: "pt-background",
        title: "Background",
        content: (
          <>
            <p>
              This document is a legally binding agreement and shall be effective upon your acceptance of the same, whether directly or indirectly, including through electronic means or by way of an electronic record. These Platform Terms of Use (&quot;Terms&quot;) form an integral part of the governing policies applicable to the services offered through the website and mobile application operated under the name and style of &quot;MOVA&quot; (&quot;Platform&quot;).
            </p>
            <p>
              The Platform is owned and operated by <strong>MOVA TECHNICAL SOLUTIONS PRIVATE LIMITED</strong>, a company incorporated under the Companies Act, 2013, bearing Corporate Identification Number (CIN) U62011AP2025PTC117460, Goods and Services Tax Identification Number (GSTIN) 37AASCM8654M1ZE, and having its registered office at GSR &amp; KKR Educational Society, Vatticherukuru (M), Vinjanampadu, Guntur, Andhra Pradesh – 522017 (hereinafter referred to as &quot;MOVA&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;, which expression shall, unless repugnant to the context, include its successors, assigns, and permitted transferees).
            </p>
            <p>
              The users of the Platform, whether as visitors or registered users, and whether acting in the capacity of vehicle owners/vendors or end users, may be individuals or legal entities (hereinafter referred to as &quot;User&quot;, &quot;you&quot;, &quot;your&quot;, or &quot;yourself&quot;).
            </p>
          </>
        ),
      },
      {
        id: "pt-nature",
        title: "Nature of Platform Services",
        content: (
          <>
            <p>
              MOVA operates a technology-enabled digital marketplace that facilitates vehicle sharing arrangements between independent vehicle owners or vendor representatives (&quot;Vendors&quot;) and users seeking temporary access to vehicles, with or without a driver (&quot;Users&quot;). MOVA does not own, operate, control, insure, manage, maintain, or dispatch any vehicles, and does not provide any transport or mobility service in its own capacity. MOVA acts solely as a neutral technology facilitator enabling Vendors and Users to connect, communicate, and transact through the Platform.
            </p>
            <p>
              All vehicle sharing arrangements are entered into directly between the Vendor and the User, and MOVA is not a party to such arrangements.
            </p>
          </>
        ),
      },
      {
        id: "pt-governing",
        title: "Governing Policies",
        content: (
          <>
            <p>These Platform Terms of Use, together with the following documents (as amended from time to time), collectively constitute the binding agreement between you and MOVA (collectively, the &quot;Governing Policies&quot;):</p>
            <ul>
              <li>Vendor (Host) Terms &amp; Conditions</li>
              <li>User (Guest) Terms &amp; Conditions</li>
              <li>Fee, Cancellation &amp; Penalty Policy</li>
              <li>Privacy Policy</li>
              <li>Wallet, Promo Code &amp; Gift Card Terms</li>
              <li>Any other policy or guideline published on the Platform</li>
            </ul>
          </>
        ),
      },
      {
        id: "pt-acceptance",
        title: "Acceptance of Terms",
        content: (
          <>
            <p>Please read these Terms carefully before accessing or using the Platform.</p>
            <p>If you do not agree with these Terms, you must immediately discontinue use of the Platform and refrain from availing any services.</p>
            <p>By accessing, registering on, or using the Platform, you acknowledge that you have read, understood, and agreed to be legally bound by these Terms and the Governing Policies.</p>
          </>
        ),
      },
      {
        id: "pt-modification",
        title: "Modification of Terms",
        content: (
          <p>
            MOVA reserves the right, at its sole discretion, to modify, amend, or update these Terms at any time. Such modifications shall be effective from the date they are published on the Platform. You are responsible for periodically reviewing these Terms. Continued use of the Platform following the publication of changes shall constitute your acceptance of such modifications. If you do not agree with any revised Terms, you must discontinue use of the Platform.
          </p>
        ),
      },
      {
        id: "pt-eligibility",
        title: "Account Registration and Eligibility",
        content: (
          <>
            <h4>Eligibility</h4>
            <p>You must be at least 18 years of age and legally competent to enter into a contract under applicable Indian laws to use the Platform. MOVA reserves the right to suspend or terminate access if it is discovered that a User does not meet eligibility requirements.</p>
            <h4>Account Responsibility</h4>
            <p>You are responsible for maintaining the confidentiality of your login credentials and for all activities carried out through your account. MOVA shall not be liable for any loss or damage arising from unauthorized access to your account.</p>
            <p>Allowing any third party to use your account is strictly prohibited, and you shall be solely liable for any consequences arising therefrom.</p>
          </>
        ),
      },
      {
        id: "pt-fees",
        title: "Fees and Taxes",
        content: (
          <p>
            You agree to pay all applicable fees, charges, penalties, and taxes as displayed on the Platform at the time of booking or transaction. All statutory taxes, levies, or duties shall be borne by the User or Vendor, as applicable.
          </p>
        ),
      },
      {
        id: "pt-use",
        title: "Use of the Platform",
        content: (
          <>
            <p>You agree that your use of the Platform shall not:</p>
            <ul>
              <li>Violate any applicable law in India</li>
              <li>Involve false, misleading, or fraudulent information</li>
              <li>Infringe intellectual property rights of MOVA or any third party</li>
              <li>Facilitate unlawful, abusive, or prohibited activities</li>
              <li>Disrupt or interfere with the functioning of the Platform</li>
            </ul>
            <p>MOVA reserves the right to take appropriate action, including suspension or termination of access, in case of any violation.</p>
          </>
        ),
      },
      {
        id: "pt-privacy",
        title: "Privacy",
        content: (
          <p>
            MOVA collects, processes, stores, and protects personal and non-personal data in accordance with its Privacy Policy, which is compliant with the Digital Personal Data Protection Act, 2023. By using the Platform, you consent to such collection and processing.
          </p>
        ),
      },
      {
        id: "pt-payment",
        title: "Payment Facility",
        content: (
          <p>
            MOVA may facilitate payments through authorized third-party payment service providers in accordance with applicable Indian laws. MOVA acts only as a payment facilitator and does not assume responsibility for payment disputes between Vendors and Users, except to the extent mandated by law.
          </p>
        ),
      },
      {
        id: "pt-disclaimers",
        title: "Disclaimers",
        content: (
          <>
            <p>The Platform is provided on an &quot;as is&quot; and &quot;as available&quot; basis. MOVA does not guarantee uninterrupted or error-free operation of the Platform.</p>
            <p>MOVA expressly disclaims all liability arising from:</p>
            <ul>
              <li>Vehicle condition or performance</li>
              <li>Acts or omissions of Vendors, Users, or drivers</li>
              <li>Accidents, injuries, death, or property damage</li>
              <li>Third-party services accessed through the Platform</li>
            </ul>
          </>
        ),
      },
      {
        id: "pt-ip",
        title: "Intellectual Property",
        content: (
          <p>
            All intellectual property rights related to the Platform, including software, design, trademarks, logos, and content, are owned by MOVA or its licensors. Unauthorized use is strictly prohibited.
          </p>
        ),
      },
      {
        id: "pt-indemnity",
        title: "Indemnity and Limitation of Liability",
        content: (
          <>
            <p>You agree to indemnify and hold harmless MOVA, its directors, officers, employees, and affiliates from any claims, losses, damages, or expenses arising out of your use of the Platform or violation of these Terms.</p>
            <p>MOVA&apos;s maximum aggregate liability, if any, shall be limited to <strong>INR 10,000</strong>.</p>
          </>
        ),
      },
      {
        id: "pt-general",
        title: "General Provisions",
        content: (
          <>
            <p>If any provision of these Terms is held invalid or unenforceable, the remaining provisions shall remain in full force and effect.</p>
            <p>MOVA may assign or transfer its rights under these Terms without prior notice. You may not assign your rights without written consent.</p>
          </>
        ),
      },
      {
        id: "pt-grievance",
        title: "Grievance Redressal",
        content: (
          <>
            <p>For complaints or concerns, contact:</p>
            <div className="bg-[#00252e]/5 rounded-lg p-4 mt-2">
              <p className="font-semibold">Grievance Officer</p>
              <p>Email: <a href="mailto:grievance@mova.org.in" className="text-[#00a8cc] hover:underline">grievance@mova.org.in</a></p>
              <p>Response Time: Within 7 business days</p>
            </div>
          </>
        ),
      },
      {
        id: "pt-governing-law",
        title: "Governing Law and Dispute Resolution",
        content: (
          <>
            <p>These Terms shall be governed by and construed in accordance with the laws of India.</p>
            <p>Any dispute shall be resolved through arbitration in accordance with the Arbitration and Conciliation Act, 1996.</p>
            <ul>
              <li>Seat and venue of arbitration: Hyderabad, Telangana.</li>
              <li>Courts at Hyderabad shall have exclusive jurisdiction.</li>
            </ul>
          </>
        ),
      },
    ],
  },

  /* ============================================================== */
  /*  2. Host & Guest Terms & Conditions                             */
  /* ============================================================== */
  {
    id: "host-guest-tnc",
    title: "Host & Guest Terms & Conditions",
    shortTitle: "Host & Guest T&C",
    icon: <Users className="w-5 h-5" />,
    lastUpdated: "18 February 2026",
    pdfPath: "/terms&conditions/MOVA_Host_Guest_TnC.pdf",
    sections: [
      {
        id: "hg-accident",
        title: "Accident, Theft, Traffic Violation and Confiscation",
        content: (
          <p>
            All instances of accident, damage, theft, traffic violations, and confiscation of or involving the vehicle during the Booking Period shall be handled by the parties in accordance with the provisions of the Car Sharing Agreement, including alleged damage or other issues. The Hosts and the Guests further agree to honestly represent any claims or allegations of damage and to work in good faith with each other to resolve any disagreement in keeping with the terms of the Car Sharing Agreement.
          </p>
        ),
      },
      {
        id: "hg-insurance",
        title: "Insurance, Trip Protection Packages & Damage Management",
        content: (
          <>
            <h4>Host Vehicle Insurance</h4>
            <p>To protect the Host vehicles against damages and theft, and in compliance with the comprehensive insurance requirements as mandated by Motor Vehicles Act, 1988, the Host shall at all times maintain a comprehensive insurance with an insurance company of its choice (&quot;Host Vehicle Insurance&quot;).</p>

            <h4>Damage Policy</h4>
            <ul>
              <li>For Retail Hosts, MOVA has tie-ups with third party insurance providers who assist in repair of damaged vehicles and provide coverage for total loss and theft of the vehicle. This Damage Policy however is not applicable to Fleet Operators. Fleet Operators maintain separate insurance on their fleet of vehicles. This Damage Policy however excludes claims of third-party injury/damages for Hosts.</li>
              <li>The Retail Host also understands and agrees that in the event that the Retail Host refuses, interferes, prevents the administration of the claim in any manner or repossesses the vehicle which is undergoing any maintenance/repair due to invocation of the Damage Policy, he/she shall forfeit any rights to claim damages from the Guest/insurance company.</li>
              <li>In case of total loss of vehicle, the Host understands and agrees to bind themselves to the depreciation level as prescribed under law or as prescribed by the relevant insurance company in line with market practice.</li>
              <li>MOVA shall assist the Host in filing and administering such claims for damages, theft, or loss of vehicle.</li>
            </ul>

            <h4>Trip Protection Plan and Trip Protection Fee</h4>
            <p>The Guest is responsible for payment of all expenses associated with any risks and ensuing damage to the vehicle. For each booking made, the Guests are required to select a Trip Protection Plan (&quot;TPP&quot;) during checkout. The TPP determines the Guest&apos;s maximum liability in the event of vehicle damage during the trip. The guest may avail such TPP by paying the Trip Protection Fee (&quot;TPF&quot;) over and above the Booking Fee.</p>

            <p>The Guest, however, cannot seek the benefit of this TPP in the event of the following:</p>
            <ul>
              <li>In case the vehicle is damaged, destroyed or stolen due to the deliberate act of Guest or his/her co-driver</li>
              <li>Any damage to the vehicle due to negligence or rash driving on part of the Guest</li>
              <li>The Guest was tested with alcohol in blood or breath or used drugs and or other stimulants prohibited by the law</li>
              <li>The Guest used the vehicle in a manner that is in contravention of law or the traffic regulations (over speeding, driving in restricted areas or any other illegal usage for racing/commercial usage etc)</li>
              <li>For all other risks and liabilities, including personal injury or death and property damage of the third-party, arising out of negligence or deliberate acts of the guest or his/her co-driver</li>
            </ul>

            <p>Both Host and the Guest acknowledge and agree that the information gathered through the Booking Start/Pick-up Checklist and the Booking End/Drop Checklist is crucial to the Trip protection process. Should the Host or the Guest fail to fill in these checklists, no claims of damage/repair etc shall be entertained or administered in absence of relevant proof collected through these checklists.</p>

            <h4>In case of Damage</h4>
            <p>The difference, if any, between the actual amount incurred in repairing the damage to the vehicle and the amounts covered under the Trip Protection Plan wherever the Damages are arising out of Prohibited Use.</p>

            <h4>In case of Theft/Total Loss</h4>
            <ul>
              <li>If usage of the vehicle at the time of its theft/total loss exceeds the booking period, charge of the excess period incurred as per the rate specified in Fee Policy.</li>
              <li>For Retired Vehicles, trip protection compensation is not applicable and hence no payout shall be made for theft/total loss of such Retired Vehicles.</li>
              <li>Other cost/expense incurred by the Host for/in respect of assessment loss suffered by the vehicle and possibility of its restoration.</li>
              <li>Other charges, if any, remaining unpaid by the Guest under the Car Sharing Agreement.</li>
            </ul>

            <p className="font-medium mt-4">Notwithstanding any such Trip Protection Plan/insurance/Damage Policy availed, under no circumstances shall MOVA be held liable towards the parties or a third party for any loss or damage that may be suffered by the parties or a third party.</p>
          </>
        ),
      },
      {
        id: "hg-return",
        title: "Vehicle Return / Repossession",
        content: (
          <>
            <p>
              Upon the expiry of the Booking Period or earlier termination of the Car Sharing Agreement (except termination on account of theft or total destruction/loss of the vehicle), Guest must at his/her own cost return the vehicle in almost the same order and condition, as the Vehicle was at the time of commencement of the Booking Period, except normal wear and tear, with Vehicle Documentation, vehicle&apos;s key, key fob, in-vehicle devices and other starting device in its designated position in the vehicle to the Specified Location.
            </p>
            <p>However, in case:</p>
            <ul>
              <li><strong>Wrong Location:</strong> The Guest returns the vehicle at a place other than the Designated Location; the Guest will be charged the cost of transportation.</li>
              <li><strong>Late Return:</strong> The Guest does not return the Vehicle within the specified period, Guest will be charged late return penalty specified in the Fee Policy.</li>
              <li><strong>Damage:</strong> Damage caused to the returning vehicle, other than excepted wear and tear, the Guest will be charged penalty for such damages.</li>
              <li><strong>Lost Items:</strong> Any item provided with the vehicle is lost, including keys, key fob, in-vehicle devices, or Vehicle Documentation, the Guest will be charged with an inconvenience fee.</li>
              <li><strong>Extended Booking:</strong> Where the actual booking period exceeds the initial booking period, the Guest shall pay the &quot;Extension Fee&quot; for such extended period.</li>
            </ul>
          </>
        ),
      },
      {
        id: "hg-warranties",
        title: "Warranties of the Parties",
        content: (
          <>
            <h4>Hosts&apos; Warranties</h4>
            <p>Each Host represents and warrants to MOVA that:</p>
            <ul>
              <li>Host is either the legal and beneficial owner of the listed vehicle(s) or is duly authorized in writing by the registered owner.</li>
              <li>The vehicle(s) offered for listing is/are in sound and safe condition and free of any known faults or defects.</li>
              <li>Host has the full legal right, capacity, power, and authority to enter into the Car Sharing Agreement.</li>
              <li>There is no action or proceedings by any governmental authority or third party against the Host which would restrain or prohibit the Car Sharing Agreement.</li>
            </ul>

            <h4>Guests&apos; Warranties</h4>
            <p>Each Guest represents and warrants that:</p>
            <ul>
              <li>The Guest is above the legal driving age requirement as per rules, regulations and laws in India and has a valid driving license.</li>
              <li>The Guest has the full legal right, capacity, power, and authority to enter into the Car Sharing Agreement.</li>
              <li>There is no action or proceedings by any governmental authority or third party against the Guest which would restrain or prohibit the transaction.</li>
            </ul>
          </>
        ),
      },
      {
        id: "hg-mova-warranties",
        title: "Warranties of MOVA",
        content: (
          <>
            <p>The Platform and MOVA Platform Services are provided to You &quot;AS IS&quot;. We make no representations regarding the use of or the result of the use/depiction of the contents on the Platform in terms of their correctness, accuracy, reliability, or otherwise.</p>
            <p>MOVA shall not be liable for any loss suffered by the User as a result of depending directly or indirectly on the depiction of the content on the Platform.</p>
            <p>MOVA shall have the right, at any time, to change or discontinue any aspect or feature of the Platform, including content, hours of availability and equipment needed for access or use.</p>
          </>
        ),
      },
      {
        id: "hg-indemnities",
        title: "Users' Indemnities",
        content: (
          <>
            <p>
              During the subsistence of the Car Sharing Agreement, both parties (Hosts and Guests) shall at all times, indemnify, defend, hold harmless and keep indemnified, MOVA, its parent and affiliates and their respective directors, officers, employees, shareholders, agents, attorneys, assigns and successors-in-interest (&quot;MOVA Group&quot;) against all losses, liabilities, damages, injuries, claims, demands, costs, attorney fees and other expenses arising out of or attributable to:
            </p>
            <ul>
              <li>Any losses as a consequence of default under the Car Sharing Agreement, Host T&amp;Cs and/or the Governing Policies.</li>
              <li>Any loss as a result of any representation or warranty being found to be materially incorrect or misleading.</li>
              <li>Any losses, claims, damages for any death, injury or damage to any person or property arising from the listed vehicle or its use.</li>
              <li>Any claim for breach of intellectual property rights.</li>
              <li>Liability and costs incurred in connection with any claim arising out of your use of the platform.</li>
            </ul>
          </>
        ),
      },
      {
        id: "hg-termination",
        title: "Termination",
        content: (
          <>
            <p>These Host T&amp;Cs shall continue to apply and remain valid till the User continues to use MOVA Services or is terminated.</p>
            <h4>User-Initiated Termination</h4>
            <p>You may terminate by: (i) not accessing the Platform; (ii) closing your account; or (iii) discontinuing use. Termination shall not cancel your obligation to pay for services already obtained.</p>
            <h4>MOVA-Initiated Termination</h4>
            <p>MOVA may suspend or terminate by providing 30 days&apos; prior notice, or immediately if:</p>
            <ul>
              <li>Required by law</li>
              <li>The provision of services is no longer commercially viable</li>
              <li>User fails to make payments for 15+ calendar days past due</li>
              <li>User fails to perform obligations</li>
              <li>Wrongdoing or violation by either party</li>
              <li>The vehicle is being used for a Prohibited Use</li>
              <li>MOVA elects to discontinue services</li>
              <li>Unexpected technical issues or other unforeseen circumstances</li>
            </ul>
            <h4>Effects of Termination</h4>
            <ul>
              <li>Guest must promptly return the vehicle to the Host</li>
              <li>Guest shall pay outstanding Booking Fee and all unpaid charges</li>
              <li>Host shall pay any outstanding amounts due</li>
              <li>Host shall make vehicle available for removal of In-Vehicle Devices</li>
              <li>Guest shall be refunded advance Booking Fee for unexpired period (minus adjustments)</li>
              <li>User must destroy all downloaded Platform materials</li>
            </ul>
          </>
        ),
      },
      {
        id: "hg-user-content",
        title: "User Content",
        content: (
          <>
            <p>The information, photo, image, chat communication, text, software, data, music, sound, graphics, messages, videos or other materials transmitted, uploaded, posted, emailed or otherwise made available (&quot;User Content&quot;), are entirely your responsibility. You agree to not transmit any information that:</p>
            <ul>
              <li>Belongs to another person and to which you do not have any right</li>
              <li>Is grossly harmful, harassing, blasphemous, defamatory, obscene, or otherwise unlawful</li>
              <li>Harms minors in any way</li>
              <li>Infringes any patent, trademark, copyright, or other proprietary rights</li>
              <li>Violates any law for the time being in force</li>
              <li>Deceives or misleads the addressee</li>
              <li>Impersonates another person</li>
              <li>Contains software viruses or malicious code</li>
              <li>Threatens the unity, integrity, defense, or security of India</li>
            </ul>
            <p>If you wish to delete your User Content, please contact us at <a href="mailto:ttk@mova.org.in" className="text-[#00a8cc] hover:underline">ttk@mova.org.in</a>. Please allow up to 30 business days to process your deletion request.</p>
          </>
        ),
      },
      {
        id: "hg-ip",
        title: "Intellectual Property Rights",
        content: (
          <>
            <p>The &quot;MOVA&quot; name and logo and all related product and service names, design marks and slogans are the trademarks, logos, or service marks of <strong>MOVA TECHNICAL SOLUTIONS PRIVATE LIMITED</strong>. Access to the Platform does not authorize anyone to use any Marks in any manner.</p>
            <p>MOVA and its suppliers and licensors expressly reserve all intellectual property rights in all text, programs, products, processes, technology, content, software, and other materials which appear on the Platform. The materials on the Platform shall not be copied, reproduced, duplicated, republished, downloaded, posted, transmitted, distributed, or modified except for your personal, non-commercial use only.</p>
          </>
        ),
      },
      {
        id: "hg-disclaimer",
        title: "Disclaimer of Warranty and Limitation of Liability",
        content: (
          <>
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 mb-4">
              <p className="text-sm font-medium text-amber-800">
                MOVA PLATFORM SERVICES ARE INTENDED TO BE USED TO FACILITATE THE SHARING OF VEHICLE BY THE HOST AND TO THE GUEST. MOVA CANNOT AND DOES NOT CONTROL THE CONTENT IN ANY LISTINGS AND THE CONDITION, LEGALITY OR SUITABILITY OF ANY VEHICLE LISTED ON THE PLATFORM.
              </p>
            </div>
            <p>THE PLATFORM IS PRESENTED &quot;AS IS&quot;. NEITHER MOVA NOR ITS HOLDING, SUBSIDIARIES, AFFILIATES, PARTNERS, OR LICENSORS MAKE ANY REPRESENTATIONS OR WARRANTIES OF ANY KIND WHATSOEVER, EXPRESS OR IMPLIED.</p>
            <p>MOVA SHALL NOT BE RESPONSIBLE OR LIABLE FOR ANY: (A) INTERRUPTION OF BUSINESS; (B) ACCESS DELAYS OR ACCESS INTERRUPTIONS; (C) DATA NON-DELIVERY, LOSS, THEFT, MISDELIVERY, CORRUPTION, DESTRUCTION OR OTHER MODIFICATION; (D) LOSS OR DAMAGES FROM OFF-WEBSITE LINKS; (E) VIRUSES, SYSTEM FAILURES; (F) ANY INACCURACIES OR OMISSIONS IN CONTENT; OR (G) EVENTS BEYOND REASONABLE CONTROL.</p>
            <p className="font-semibold mt-4">MOVA&apos;S MAXIMUM AGGREGATE LIABILITY SHALL NOT EXCEED INR 10,000/-</p>
            <p>NO CLAIMS OR ACTION ARISING OUT OF THE USE OF THE PLATFORM MAY BE BROUGHT MORE THAN 1 (ONE) YEAR AFTER THE CAUSE OF ACTION AROSE. IF YOU HAVE A DISPUTE WITH US, TERMINATION OF YOUR USE OF THE PLATFORM IS YOUR SOLE REMEDY.</p>
          </>
        ),
      },
      {
        id: "hg-governing-law",
        title: "Governing Law and Jurisdiction",
        content: (
          <>
            <p>These Host T&amp;Cs shall be construed in accordance with the applicable laws of India. Courts at Hyderabad shall have exclusive jurisdiction.</p>
            <p>Any dispute shall be referred to an independent arbitrator appointed by MOVA, in accordance with the Arbitration and Conciliation Act, 1996. The seat of arbitration shall be Hyderabad.</p>
          </>
        ),
      },
      {
        id: "hg-security",
        title: "Platform Security",
        content: (
          <>
            <p>You are prohibited from violating or attempting to violate the security of the Platform, including:</p>
            <ul>
              <li>Accessing data not intended for you or logging onto unauthorized accounts</li>
              <li>Attempting to probe, scan or test the vulnerability of a system or network</li>
              <li>Attempting to interfere with service to any other User, including via submitting a virus, overloading, &quot;flooding,&quot; &quot;spamming,&quot; &quot;mail bombing&quot; or &quot;crashing&quot;</li>
              <li>Sending unsolicited email, including promotions and/or advertising</li>
              <li>Forging any header or part of the header information in any email</li>
            </ul>
            <p>Violations may result in civil or criminal liability. You agree not to use any device, software, or routine to interfere with the proper working of the Platform.</p>
          </>
        ),
      },
      {
        id: "hg-misc",
        title: "Severability, Entire Agreement & General",
        content: (
          <>
            <h4>Severability</h4>
            <p>If any part of these Host T&amp;Cs is determined to be invalid or unenforceable, the remainder shall continue in effect.</p>
            <h4>Entire Agreement</h4>
            <p>The Governing Policies constitute the entire agreement between You and MOVA and supersede all prior communications and proposals.</p>
            <h4>Waiver</h4>
            <p>Our failure to require your performance of any provision shall not affect our right to require such performance at any time thereafter.</p>
            <h4>Assignment</h4>
            <p>Users shall not assign these Host T&amp;Cs without prior written consent of MOVA. MOVA shall have the right to assign in whole or in part.</p>
            <h4>Force Majeure</h4>
            <p>Performance shall be subject to force majeure events including labor disputes, acts of God, floods, earthquakes, war, terrorism, pandemic, epidemic, lockdown, government orders, etc. If non-performance exceeds 60 days, either party may terminate with written notice.</p>
            <h4>Correspondence / Notices</h4>
            <div className="bg-[#00252e]/5 rounded-lg p-4 mt-2">
              <p className="font-semibold">MOVA TECHNICAL SOLUTIONS PRIVATE LIMITED</p>
              <p>GSR &amp; KKR Educational Society, Vatticherukuru (M), Vinjanampadu, Guntur, Andhra Pradesh – 522017</p>
              <p>Email: <a href="mailto:host.support@mova.org.in" className="text-[#00a8cc] hover:underline">host.support@mova.org.in</a></p>
              <p>Website: <a href="https://www.mova.org.in" className="text-[#00a8cc] hover:underline" target="_blank" rel="noopener noreferrer">www.mova.org.in</a></p>
            </div>
          </>
        ),
      },
      {
        id: "hg-annexure",
        title: "Annexure I – Maintenance Standards for Host Vehicles",
        content: (
          <>
            <p>Your vehicle must follow all laws and regulations for safety, condition, and operation. You should get a vehicle mechanical and safety inspection at least once a year. The complete maintenance requirement list is as follows:</p>
            <div className="space-y-3 mt-4">
              <div>
                <h4>1. Legal Requirement</h4>
                <ul><li>RC Copy</li><li>Comprehensive Insurance</li><li>Valid Fitness Certificate</li><li>Requisite Registration under the Rent-A-Cab Scheme, 1989 (&quot;RAC&quot;)</li><li>First-Aid Box</li></ul>
              </div>
              <div>
                <h4>2. Brake Tests</h4>
                <ul><li>Parking brake</li><li>Service brake, 3mm or more (25% of the life of the brakes or more)</li></ul>
              </div>
              <div>
                <h4>3. Exhaust System</h4>
                <ul><li>Undamaged exhaust system components/muffler</li><li>No visible blue or black smoke</li></ul>
              </div>
              <div>
                <h4>4. Steering and Suspension</h4>
                <ul><li>Steering wheel and box</li><li>Suspension/front end</li><li>Springs, Shocks</li><li>Vehicle height</li></ul>
              </div>
              <div>
                <h4>5. Horn</h4>
                <ul><li>Sound horn to test for adequate signal</li><li>Horn must be securely fastened to the vehicle</li></ul>
              </div>
              <div>
                <h4>6. Glazing, Glass, and Windshield Wipers</h4>
                <ul><li>Windshield: no cracks, no chips in the line of sight</li><li>Windshield wipers and washer in working order</li><li>Windows: no cracks</li><li>Tint to legal specifications</li></ul>
              </div>
              <div>
                <h4>7. Engine and Powertrain</h4>
                <ul><li>Engine, including all subcomponents</li><li>Cooling, lubrication systems</li><li>Electrical and electronic management systems</li><li>Transmission, including clutch, torque converter</li><li>All fluids and lubricants</li><li>No check engine light, warning lights, or recalls</li></ul>
              </div>
              <div>
                <h4>8. Visibility and Lighting Devices</h4>
                <ul><li>Headlight aim</li><li>Headlights and rear lights working</li><li>Hazard lights, directionals/stop/reverse lights</li><li>Reflectors, rearview mirror, mirrors</li></ul>
              </div>
              <div>
                <h4>9. Tyres and Wheels</h4>
                <ul><li>4/32&quot; or greater tread depth (50% or higher)</li><li>Six years old or newer</li><li>No cuts, gouges, bulges, or bubbles in the sidewall</li></ul>
              </div>
              <div>
                <h4>10. Seat Belts and Airbags</h4>
                <ul><li>Seat belts in all seats intact and usable</li><li>No airbag warning lights or recalls</li><li>No SRS or OCS warning</li></ul>
              </div>
              <div>
                <h4>11. Body, Including All Seals and Panels</h4>
                <ul><li>No hanging body panels</li><li>No damage to the floor pan, cowl panel, or structural pillars</li></ul>
              </div>
            </div>
          </>
        ),
      },
    ],
  },

  /* ============================================================== */
  /*  3. Privacy Policy                                              */
  /* ============================================================== */
  {
    id: "privacy-policy",
    title: "Privacy Policy",
    shortTitle: "Privacy Policy",
    icon: <Shield className="w-5 h-5" />,
    lastUpdated: "18 February 2026",
    pdfPath: "/terms&conditions/MOVA_Privacy_Policy.pdf",
    sections: [
      {
        id: "pp-intro",
        title: "Introduction",
        content: (
          <>
            <p>At MOVA, your trust is our most valuable asset and we are committed to protecting your privacy. This Privacy Policy explains how <strong>MOVA TECHNICAL SOLUTIONS PRIVATE LIMITED</strong> (&quot;MOVA&quot;, &quot;We&quot;, &quot;Us&quot;, or &quot;Our&quot;) collects, uses, shares, and safeguards your personal data when you interact with our platform on our website www.mova.org.in, services, mobile applications, and other digital interfaces (&quot;Platform&quot;)—whether as a Host, Guest, or Visitor.</p>
            <p>This Policy outlines:</p>
            <ul>
              <li>What types of personal data we collect and why</li>
              <li>How we store, process, and share this data</li>
              <li>Your rights and choices regarding your data</li>
              <li>How to contact us in case of questions or concerns</li>
            </ul>
            <p>By visiting or using the Platform, providing your information, or availing of any service, you expressly agree to the terms of this Privacy Policy, along with our Terms and Conditions and other applicable policies available on the Platform. MOVA&apos;s products and services are offered only within India, and your personal data will be processed and stored in India at our registered office: GSR &amp; KKR Educational Society, Vatticherukuru (M), Vinjanampadu, Guntur, Andhra Pradesh – 522017.</p>
          </>
        ),
      },
      {
        id: "pp-collection",
        title: "1. Collection and Use of Personal Data",
        content: (
          <>
            <h4>a. Information You Provide</h4>
            <p>We collect the following types of personally identifiable information when you create an account, book a trip, list a vehicle, update your account profile, contact customer support, participate in referrals or reward programs or otherwise interact with the MOVA Platform:</p>
            <ul>
              <li><strong>Identity &amp; Contact Information:</strong> Full name, email address, mobile number, photograph, gender, date of birth, and postal address(es).</li>
              <li><strong>Government ID &amp; KYC:</strong> Aadhaar, Driving License, or other government approved identification/address proof documents.</li>
              <li><strong>Vehicle Information (Hosts only):</strong> Registration Certificate (RC), valid comprehensive insurance, PUC Certificate, and applicable permits.</li>
              <li><strong>Financial &amp; Payment Data:</strong> PAN, bank account details, UPI/credit/debit card details, cancelled cheque, and transaction histories.</li>
              <li><strong>Professional Data:</strong> KYC details of authorised signatories, business registration, GST, TAN, and associated entity records.</li>
            </ul>

            <h4>b. Information We Collect</h4>
            <p>When you access the MOVA platform, we may automatically collect certain technical and behavioural information including:</p>
            <ul>
              <li><strong>Device &amp; App Usage Data:</strong> Device type, OS, IP address, browser type, language preferences, unique device identifiers, crash logs.</li>
              <li><strong>Cookies &amp; Web Beacons:</strong> Session cookies and analytics tools for session management, analytics, personalized content delivery, and fraud detection.</li>
              <li><strong>Platform Navigation:</strong> Session timing, viewed pages, clicks, search terms, interaction patterns, referral URLs, and exit paths.</li>
              <li><strong>Location Data:</strong> GPS-based real-time or one-time location, linked to your ongoing booking (if permission granted).</li>
            </ul>

            <h4>c. Location Data &amp; Trip Monitoring</h4>
            <p><strong>User Device-Based Tracking:</strong></p>
            <ul>
              <li><strong>One-Time Access:</strong> Captures only the pickup and drop coordinates (Trip Start and End).</li>
              <li><strong>Continuous Access:</strong> Enables live location tracking throughout the trip duration for real-time route monitoring, delay detection, and in-trip safety events.</li>
            </ul>
            <p><strong>GPS Tracker-Based Tracking (Host Opt-In):</strong> Vehicles equipped with GPS/telematics devices may collect live location &amp; route history, vehicle diagnostics, driving behaviour data, and tamper alerts.</p>

            <h4>d. Third-Party Source Data</h4>
            <p>We may collect or supplement your personal data from government &amp; regulatory portals (VAHAN/RTO, GSTN, UIDAI), public legal records, public business listings, and third-party KYC/verification services.</p>
          </>
        ),
      },
      {
        id: "pp-purpose",
        title: "2. Purpose for Collection",
        content: (
          <>
            <h4>a. Communication, Booking and Service Fulfilment</h4>
            <ul>
              <li>To register you as a user on the MOVA Platform</li>
              <li>To enable vehicle listings, bookings, and subscription-based services</li>
              <li>To collect, verify, and authenticate your identity (KYC)</li>
              <li>To process payments, refunds, or claims</li>
              <li>To generate and share invoices and transaction records</li>
              <li>To contact you via phone, SMS, push notifications, email, or WhatsApp for service updates</li>
            </ul>
            <h4>b. Real-Time Support &amp; Location-Based Services</h4>
            <ul>
              <li>To provide customer support during your booking lifecycle</li>
              <li>To assist with in-trip issues such as delays, breakdowns, fuel emergencies, or accidents</li>
              <li>To allow live GPS-based location tracking for route navigation, delay detection, and safety</li>
            </ul>
            <h4>c. Host &amp; Guest Vetting and Compliance</h4>
            <ul>
              <li>To verify ownership, emission certificates, driving license and vehicle records</li>
              <li>To conduct background checks, blacklist screenings, or fraud checks</li>
              <li>To monitor compliance with platform policies and the Motor Vehicles Act, 1988</li>
            </ul>
            <h4>d. Marketing, Personalization &amp; Platform Optimization</h4>
            <ul>
              <li>To send transactional alerts, payment reminders, and promotional offers</li>
              <li>To personalize user experience and analyse trends</li>
              <li>To enable referral programs, loyalty schemes, and user rewards</li>
            </ul>
            <h4>e. Security, Fraud Detection &amp; Risk Management</h4>
            <ul>
              <li>To identify and prevent unauthorized or suspicious platform usage</li>
              <li>To monitor IP address, device identifiers, access time logs, and geo anomalies</li>
              <li>To flag repeat cancellations, tampering, damage, or account misuse</li>
            </ul>
            <h4>f. Legal, Regulatory, and Contractual Obligations</h4>
            <ul>
              <li>To comply with applicable laws including the DPDP Act, 2023, the IT Act, 2000, and the Motor Vehicles Act, 1988</li>
              <li>To process personal data for insurance claims, police investigations, or court directives</li>
              <li>To facilitate audits, compliance reviews, or tax/regulatory reporting</li>
            </ul>
          </>
        ),
      },
      {
        id: "pp-non-personal",
        title: "3. Non-Personal Information",
        content: (
          <>
            <p>In addition to personal data, we may collect non-personal information to improve platform performance, personalize user experience, ensure platform security, and support analytics.</p>
            <h4>Cookies and Similar Tracking Technologies</h4>
            <p>We use cookies, pixels, SDKs, and similar tracking technologies to measure user engagement, remember preferences, serve relevant ads, and improve navigation experience.</p>
            <h4>Sharing of Non-Personal Information</h4>
            <p>We may share aggregated or anonymized non-personal information with advertisers, analytics partners, research collaborators, and third-party platforms. However, we do not sell, license, or share any data that can directly or indirectly identify a user unless required under law.</p>
          </>
        ),
      },
      {
        id: "pp-sharing",
        title: "4. Sharing of Personal Data",
        content: (
          <>
            <h4>a. Service Providers and Business Partners</h4>
            <p>We may share your data with trusted third-party service providers including payment processors, cloud infrastructure providers, analytics platforms, and customer support vendors.</p>
            <h4>b. Vehicle Owners (Hosts) and Guests</h4>
            <p>Certain information will be shared between Host and Guest to facilitate the trip experience, including booking details, profile verification selfie, verified contact details, live location data, and vehicle document snapshots.</p>
            <h4>c. Legal Compliance and Law Enforcement</h4>
            <p>We may disclose your personal data where required by applicable law, governmental request, legal process, or court order.</p>
            <h4>d. With Your Consent</h4>
            <p>We may share your data with third parties when you explicitly consent, including participation in promotional campaigns or partnerships.</p>
            <h4>e. Business Transfers</h4>
            <p>In case of a merger, acquisition, reorganization, or sale of assets, your personal data may be transferred to the relevant third party.</p>
            <p className="mt-4 font-medium">Note: MOVA does not sell your personal data to any third party.</p>
          </>
        ),
      },
      {
        id: "pp-security",
        title: "5. Security of Your Personal Information",
        content: (
          <>
            <p>We have implemented appropriate administrative, technical, and physical safeguards including:</p>
            <ul>
              <li>Encryption of data in transit using secure HTTPS and TLS protocols</li>
              <li>Role-based access controls and strict internal audits</li>
              <li>Periodic reviews of data collection, processing, and storage mechanisms</li>
              <li>Hosting data in secure, firewall-protected infrastructure with disaster recovery protocols</li>
            </ul>
            <p>We only work with certified payment gateway providers who follow PCI DSS standards.</p>
            <p>You are solely responsible for safeguarding login credentials and maintaining the confidentiality of your account.</p>
          </>
        ),
      },
      {
        id: "pp-retention",
        title: "6. Retention of Data",
        content: (
          <>
            <ul>
              <li><strong>Booking &amp; Trip-Related Data:</strong> Retained for a maximum of 6 months post-trip completion.</li>
              <li><strong>KYC, Identity &amp; Verification Documents:</strong> Stored as long as the user remains active, and mandatorily for minimum 90 days post account closure.</li>
              <li><strong>Payment &amp; Financial Records:</strong> Retained for 8 years as per financial and taxation norms.</li>
              <li><strong>Consent Logs:</strong> Retained for at least 90 days.</li>
              <li><strong>Communication &amp; Support Logs:</strong> Retained for up to 3 years.</li>
              <li><strong>Image &amp; Camera Inputs:</strong> Retained for a maximum of 6 months.</li>
            </ul>
            <p className="mt-4">Once the retention period ends, we either permanently delete the data or anonymize it so that it cannot be linked back to any individual.</p>
          </>
        ),
      },
      {
        id: "pp-rights",
        title: "7. Your Rights and Choices",
        content: (
          <>
            <h4>a. Right to Access</h4>
            <p>You can request details about the personal data we hold about you via the app or by emailing <a href="mailto:ttk@mova.org.in" className="text-[#00a8cc] hover:underline">ttk@mova.org.in</a>.</p>
            <h4>b. Right to Correction and Updating</h4>
            <p>You can request correction of incorrect, outdated, or incomplete personal data directly through your MOVA account or via written request.</p>
            <h4>c. Right to Withdraw Consent</h4>
            <p>You may withdraw consent at any time by adjusting app settings, using opt-out links, or sending a written request to our Grievance Officer.</p>
            <h4>d. Right to Deletion</h4>
            <p>You can request deletion of your personal data. Account deletion can be initiated via Settings in the MOVA App or at <a href="https://www.mova.org.in/users/profile#delete_account" className="text-[#00a8cc] hover:underline" target="_blank" rel="noopener noreferrer">www.mova.org.in/users/profile#delete_account</a>.</p>
            <h4>e. Right to Nominate</h4>
            <p>You may nominate another individual to exercise your rights in the event of death or incapacity.</p>
            <h4>f. Right to File a Grievance</h4>
            <p>You can raise a grievance with our designated Grievance Officer.</p>
          </>
        ),
      },
      {
        id: "pp-children",
        title: "8. Children's Information",
        content: (
          <p>
            MOVA does not knowingly collect or solicit personal information from individuals below the age of 18. If you believe a child has provided us personal data without verified parental consent, please contact our Grievance Officer.
          </p>
        ),
      },
      {
        id: "pp-updates",
        title: "9. Miscellaneous & Updates",
        content: (
          <>
            <p>MOVA shall not be held liable for any delay or failure caused by any Force Majeure Event.</p>
            <p>MOVA reserves the right to revise this Privacy Policy from time to time. When significant changes are made, we will notify you by updating the &quot;Last Updated&quot; date and displaying a prominent notice on our Platform.</p>
            <div className="bg-[#00252e]/5 rounded-lg p-4 mt-4">
              <p className="font-semibold">Grievance Officer</p>
              <p>Name: Teja Tarun Kapu</p>
              <p>Email: <a href="mailto:ttk@mova.org.in" className="text-[#00a8cc] hover:underline">ttk@mova.org.in</a></p>
              <p>Response Time: Within 7 business days</p>
            </div>
          </>
        ),
      },
    ],
  },

  /* ============================================================== */
  /*  4. Guest Fee Policy                                            */
  /* ============================================================== */
  {
    id: "guest-fee-policy",
    title: "Guest Fee Policy",
    shortTitle: "Fee Policy",
    icon: <CreditCard className="w-5 h-5" />,
    lastUpdated: "19 February 2026",
    pdfPath: "/terms&conditions/MOVA_GuestFeePolicy.pdf",
    sections: [
      {
        id: "gf-booking",
        title: "Booking Fee",
        content: (
          <>
            <p>For each booking made through the MOVA Platform, the Guest shall have to pay Booking Fee in advance. Booking Fee is calculated on the basis of the start and the end time of the trip. The Booking Fee per hour is dynamically driven and changes based on the demand, lead time to booking start, location, vehicle chosen and the duration of the booking.</p>
          </>
        ),
      },
      {
        id: "gf-subscription",
        title: "MOVA Subscription Booking Fee",
        content: (
          <>
            <p>For bookings made under MOVA Subscription Model (for duration of at least 7 days and up to more than 30 days), the Booking Fee is calculated cumulatively across the entire duration of the booking.</p>
            <p>Under the MOVA Subscription Model, Guest may choose an option among the following:</p>
            <ul>
              <li><strong>Limited Kilometers:</strong> Subject to a daily distance limit of 144 kilometers per day calculated cumulatively. Any excess kilometers driven will be chargeable on a per kilometer basis (Excess KM Fee).</li>
              <li><strong>Unlimited Kilometers:</strong> No limitation on daily kilometers. However, the per day cost may be higher considering the excessive usage and associated wear and tear.</li>
              <li><strong>Excess KM Fee:</strong> Additional fee calculated on a per kilometer basis for exceeding the daily limit. Subject to variation depending on vehicle type, fuel type, location, and booking duration. Verified through odometer reading images uploaded by Host &amp; Guest at start and end of trip.</li>
            </ul>
          </>
        ),
      },
      {
        id: "gf-tpp",
        title: "Trip Protection Plan",
        content: (
          <>
            <p>For each booking made, the Guests are required to select a Trip Protection Plan (TPP) during checkout. The TPP determines the Guest&apos;s maximum liability in the event of vehicle damage during the trip.</p>
            <p>The Guests can choose from the following:</p>
            <ul>
              <li><strong>Basic Plan:</strong> Higher liability coverage at a lower upfront cost.</li>
              <li><strong>Max Plan:</strong> Moderate coverage with balanced cost-benefit.</li>
              <li><strong>Plus Plan:</strong> Lowest liability in case of damage, offering maximum protection.</li>
            </ul>
            <p className="mt-2">Please note:</p>
            <ul>
              <li>TPP is applicable only to accidental or unintentional damages. It does not cover damage from prohibited activities, reckless use, illegal driving, or intentional misuse.</li>
              <li>Any damage beyond the selected TPP coverage will need to be settled additionally.</li>
              <li>Refund of TPP fee is subject to conditions defined under the Cancellation section.</li>
              <li>All deductions will be supported by photographic or diagnostic evidence.</li>
            </ul>
          </>
        ),
      },
      {
        id: "gf-security",
        title: "Security Deposit Policy",
        content: (
          <>
            <p>MOVA does not collect any Security Deposit from Guests. All post-trip charges, including any applicable damage, late return penalties, or violations, shall be managed through the Guest&apos;s registered payment method or outstanding balance on their MOVA account.</p>
            <p><strong>Please Note:</strong> Since MOVA does not collect a Security Deposit, any charges related to fuel or FASTag must be settled directly between the Host and the Guest.</p>
            <h4>Post-Trip Charges</h4>
            <p>Outstanding charges will be communicated within 48 hours of trip closure, subject to internal verification:</p>
            <ul>
              <li>No damage, violation, or late return reported within 48 hours</li>
              <li>Guest has complied with all MOVA Guest Agreement terms</li>
              <li>Vehicle returned in acceptable condition with no pending challans</li>
              <li>Kilometer limit not exceeded (for Limited Kilometer subscriptions)</li>
            </ul>
            <h4>Deductions</h4>
            <ul>
              <li><strong>Vehicle Damage:</strong> Charges per TPP chosen. Excess damage costs added as outstanding.</li>
              <li><strong>Late Returns:</strong> Standard late return penalties apply.</li>
              <li><strong>Traffic Violations:</strong> Challan amounts adjusted accordingly.</li>
              <li><strong>Excess KM Fee:</strong> Based on odometer readings for Limited Kilometer bookings.</li>
            </ul>
          </>
        ),
      },
      {
        id: "gf-cancellation",
        title: "Cancellation Policy",
        content: (
          <>
            <p>The refund applicable for Guest-initiated cancellations will be as follows:</p>
            <div className="overflow-x-auto mt-4">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#00252e] text-white">
                    <th className="p-3 text-left border border-[#00252e]/20">Cancellation Timeline</th>
                    <th className="p-3 text-left border border-[#00252e]/20">Refund</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 border border-gray-200">15 days or more before Original Start Time</td>
                    <td className="p-3 border border-gray-200"><strong>100%</strong> refund of Booking Fee, TPP fee, and Delivery Fee</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 border border-gray-200">Within 15 days and up to 6 hours before Original Start Time</td>
                    <td className="p-3 border border-gray-200"><strong>50%</strong> refund of Booking Fee or INR 4,000 (whichever is lower), plus 50% of TPP fee, and 50% of Delivery Fee</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Within 6 hours before Original Start Time</td>
                    <td className="p-3 border border-gray-200"><strong>No refund</strong> of Booking Fee, TPP fee, and Delivery Fee</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="mt-4"><strong>Please Note:</strong> Platform Fee is non-refundable in any of the above events. In the event of cancellation by the Host, the Guest will be entitled to a 100% refund.</p>
          </>
        ),
      },
      {
        id: "gf-reschedule",
        title: "Rescheduling, Extension & Late Return",
        content: (
          <>
            <h4>Rescheduling</h4>
            <p>No modifications are allowed to the scheduled booking within 0-6 hours before the booking start time.</p>
            <h4>Extension</h4>
            <p>Guests may extend the booking period at any time before the scheduled end. Extension charges include the booking fee for the extended duration and applicable TPF on a pro-rata basis.</p>
            <h4>Shortening Post Start</h4>
            <p>Dropping the vehicle before the booking end time is allowed. However, no additional charges or refunds will be applicable for early drop-off.</p>
            <h4>Late Return</h4>
            <p>A late return will incur charges up to <strong>1.5-2 times</strong> the hourly Booking Fee per hour.</p>
            <h4>Minimum Duration</h4>
            <p>The minimum booking duration is <strong>4 hours</strong>.</p>
          </>
        ),
      },
      {
        id: "gf-fuel",
        title: "Fuel Policy",
        content: (
          <>
            <p>In the event that the vehicle is dropped off with:</p>
            <ul>
              <li><strong>Lesser fuel</strong> than at booking start — the Guest shall pay the host refueling charges based on the actual per-liter price.</li>
              <li><strong>More fuel</strong> than at booking start — the Guest may request a refund from the host based on the actual per-liter price.</li>
            </ul>
            <p className="mt-2"><strong>Formula:</strong> Refueling charges/Refund = Actual cost of fuel per litre × difference in fuel level (in liters).</p>
            <p className="mt-2"><strong>Note:</strong> Each fuel-related dispute needs to be resolved between the Host and the Guest independently. MOVA shall not be involved in resolving fuel-related disputes.</p>
          </>
        ),
      },
      {
        id: "gf-penalties",
        title: "Penalties & Violations",
        content: (
          <>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-sm">
                <thead>
                  <tr className="bg-[#00252e] text-white">
                    <th className="p-3 text-left border border-[#00252e]/20">Violation</th>
                    <th className="p-3 text-left border border-[#00252e]/20">Penalty</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b">
                    <td className="p-3 border border-gray-200">Wrong Location Return</td>
                    <td className="p-3 border border-gray-200">Flat fee of INR 10,000 towards towing expenses</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 border border-gray-200">No Show (after 4 hours)</td>
                    <td className="p-3 border border-gray-200">Booking cancelled, no refunds</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 border border-gray-200">Overspeeding ≥ 125 km/hr</td>
                    <td className="p-3 border border-gray-200">INR 2,500 + government fines. Blacklisted after 2 incidents.</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 border border-gray-200">Overspeeding ≥ 150 km/hr</td>
                    <td className="p-3 border border-gray-200">Immediate blacklisting from MOVA Platform</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 border border-gray-200">Smoking</td>
                    <td className="p-3 border border-gray-200">INR 500 + applicable interior damage costs</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="p-3 border border-gray-200">Wrong Fuelling</td>
                    <td className="p-3 border border-gray-200">Full cost of repair/damage + miscellaneous expenses</td>
                  </tr>
                  <tr className="border-b">
                    <td className="p-3 border border-gray-200">Loss of Keys</td>
                    <td className="p-3 border border-gray-200">INR 10,000</td>
                  </tr>
                  <tr>
                    <td className="p-3 border border-gray-200">Loss of RC/Documents</td>
                    <td className="p-3 border border-gray-200">INR 10,000</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </>
        ),
      },
      {
        id: "gf-damage",
        title: "Vehicle Damage Policy",
        content: (
          <>
            <h4>Accidental Damage</h4>
            <p>Guests are responsible for unintentional or accidental damage, up to the maximum liability covered by the Trip Protection Plan. All payments must be made digitally and verified through MOVA. Direct settlements with Hosts or cash payments are strictly prohibited.</p>

            <h4>Intentional or Consequential Damage</h4>
            <p>Guests will be liable for the full cost of repairing any intentional damage, including situations where:</p>
            <ul>
              <li>The Guest is found to be under the influence of alcohol</li>
              <li>The vehicle workshop or insurance company attributes the damage to the Guest</li>
              <li>A non-MOVA Guest is driving the vehicle during an accident</li>
            </ul>
            <p>Guests are also responsible for compensating MOVA for any additional damages, including loss of expected revenue.</p>

            <h4>Collision or Other Incidents</h4>
            <p>Guests are liable for damages up to the maximum limits under the selected TPP. The Guest is responsible for all costs related to towing, impounding, and damage repair resulting from prohibited or negligent use.</p>

            <h4>Cleaning (Interiors)</h4>
            <ul>
              <li>Removable dirt (e.g., foot mats): <strong>INR 500</strong></li>
              <li>Interior washing or dry cleaning (e.g., seat covers, pet hair): <strong>INR 1,500</strong></li>
            </ul>

            <h4>FasTags/Tolls</h4>
            <p>Guests are responsible for recharging and paying all toll amounts incurred during the booking period. Settlements related to FASTag debits and credits are solely the responsibility of the Guest and the Host.</p>
          </>
        ),
      },
      {
        id: "gf-delivery",
        title: "Home/Airport Delivery & Platform Fee",
        content: (
          <>
            <h4>Home / Airport Vehicle Pick-up and Drop</h4>
            <p>Home delivery, collection, or airport delivery services are available upon payment of a Delivery Fee, subject to host availability and ongoing offers.</p>
            <ul>
              <li>If the Host refuses both doorstep delivery and collection — <strong>full refund</strong> of Delivery Fee.</li>
              <li>If the Host refuses either delivery or collection — <strong>50% refund</strong> of Delivery Fee.</li>
            </ul>
            <p>The vehicle will be delivered within 0-5 minutes prior to booking start time. Pickup will occur within 30 minutes from the booking end time.</p>

            <h4>Convenience / Platform Fee</h4>
            <p>Guests are charged a mandatory, non-waivable Platform Fee for every booking. This fee applies to both app-based and web-based bookings and is in addition to the Trip Protection Fee. The Platform Fee is <strong>strictly non-refundable</strong> under any circumstances, including cancellation.</p>
          </>
        ),
      },
      {
        id: "gf-reminders",
        title: "Important Reminders",
        content: (
          <ul>
            <li>All rates mentioned above are inclusive of applicable GST.</li>
            <li>Handover of the vehicle, extensions, and modifications are subject to vehicle availability.</li>
            <li>Guests violating the law or applicable MOVA policies are liable for damages, fines, and legal consequences.</li>
            <li>MOVA will not assume responsibility for any property left in the vehicle after the booking has ended.</li>
            <li>MOVA reserves the right to revise, extend, or modify the Policy at any time at its sole discretion.</li>
            <li>Guests are advised to review this policy periodically to stay updated on any changes.</li>
          </ul>
        ),
      },
    ],
  },

  /* ============================================================== */
  /*  5. Gift Cards Terms & Conditions                               */
  /* ============================================================== */
  {
    id: "gift-cards",
    title: "Gift Cards Terms & Conditions",
    shortTitle: "Gift Cards",
    icon: <Gift className="w-5 h-5" />,
    lastUpdated: "18 February 2026",
    pdfPath: "/terms&conditions/MOVA_Gift_Cards_TnC.pdf",
    sections: [
      {
        id: "gc-overview",
        title: "Overview",
        content: (
          <>
            <p>These Terms &amp; Conditions include specific conditions applicable to the purchase and usage of MOVA Gift Cards. These MOVA Gift Cards are pre-paid gift vouchers issued by <strong>MOVA TECHNICAL SOLUTIONS PRIVATE LIMITED</strong> for purchase of MOVA Credits for usage on the MOVA Platform. Upon purchase of such MOVA Gift Cards, the corresponding MOVA Credits will be credited to the Guest&apos;s MOVA Wallet.</p>
            <p><strong>Redemption Rate:</strong> A single MOVA Credit shall be equivalent to INR 1 (one rupee). For example, if you purchase a MOVA Gift Card for INR 4750 you shall receive MOVA Credits worth INR 4750.</p>
            <p><strong>Services:</strong> The Guests may use these MOVA Credits for availing the MOVA Platform Services for self-drive and subscription vehicles.</p>
          </>
        ),
      },
      {
        id: "gc-limitations",
        title: "Limitations",
        content: (
          <ul>
            <li>These MOVA Gift Cards are <strong>non-refundable, non-returnable, and non-negotiable</strong> once purchased.</li>
            <li>While MOVA Gift Cards may be bought by anyone, they are only redeemable through unique codes applicable to each card. Once redeemed, the MOVA Credits are non-transferable.</li>
            <li>These MOVA Gift Cards are redeemable only on the MOVA Website and App and cannot be used for any other purposes.</li>
            <li>These Vouchers cannot be utilised to pay for trip protection fee or platform fee.</li>
          </ul>
        ),
      },
      {
        id: "gc-applicability",
        title: "Applicability & Usage",
        content: (
          <>
            <p><strong>Applicability:</strong> These MOVA Gift Cards and corresponding MOVA Credits are redeemable for bookings made throughout the territory of India.</p>
            <p><strong>Usage Limit:</strong> The Guest may avail the entire MOVA Credits from such MOVA Gift Cards for a single booking at once. Such MOVA Credits can be used simultaneously with any Wallet Credits available to you on your Profile.</p>
          </>
        ),
      },
      {
        id: "gc-validity",
        title: "Validity",
        content: (
          <p>
            The MOVA Gift Card as well as MOVA Credits added to the Guest&apos;s wallet upon purchase/redemption shall remain valid for <strong>one (1) year</strong>. Any outstanding balance from these MOVA Gift Cards is non-refundable and will expire upon completion of one year from the date of purchase.
          </p>
        ),
      },
      {
        id: "gc-cancellations",
        title: "Cancellations",
        content: (
          <p>
            In the event of any booking cancellations made by the Guests, the MOVA Credits that were utilised by the Guest in such booking will be refunded back to the Guest&apos;s account after taking into account the penalties or deductions for such cancellation as outlined under the MOVA Platform Services Terms and Conditions.
          </p>
        ),
      },
      {
        id: "gc-disputes",
        title: "Claims, Disputes & General",
        content: (
          <>
            <ul>
              <li>MOVA TECHNICAL SOLUTIONS PRIVATE LIMITED may alter, replace, or withdraw these terms and conditions or the MOVA Gift Cards and MOVA Credits at any time without notice.</li>
              <li>Any issue or claim related to these MOVA Gift Cards must be escalated directly to MOVA TECHNICAL SOLUTIONS PRIVATE LIMITED through the Help Section on the MOVA website and app, without involving any third party.</li>
              <li>Disputes related to the MOVA Gift Cards shall be subject to the exclusive jurisdiction of the courts in Hyderabad.</li>
              <li>The decision of MOVA TECHNICAL SOLUTIONS PRIVATE LIMITED in all matters in connection with MOVA Gift Cards is final and binding.</li>
              <li>The Guests shall be deemed to have read, understood and accepted these terms and conditions before availing the benefit.</li>
              <li>MOVA TECHNICAL SOLUTIONS PRIVATE LIMITED reserves the right to disqualify any Guests from the benefits if any fraudulent activity is identified.</li>
            </ul>
          </>
        ),
      },
    ],
  },
];

/* ------------------------------------------------------------------ */
/*  TABLE OF CONTENTS COMPONENT (sidebar)                              */
/* ------------------------------------------------------------------ */
function TableOfContents({
  activePolicy,
  activePolicyData,
  activeSection,
  onSectionClick,
}: {
  activePolicy: string;
  activePolicyData: PolicyDocument;
  activeSection: string;
  onSectionClick: (sectionId: string) => void;
}) {
  return (
    <nav className="space-y-1">
      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 mb-3 px-3">
        Table of Contents
      </p>
      {activePolicyData.sections.map((section, index) => (
        <button
          key={section.id}
          onClick={() => onSectionClick(section.id)}
          className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all duration-200 flex items-start gap-2 ${
            activeSection === section.id
              ? "bg-[#00a8cc]/10 text-[#00a8cc] font-medium"
              : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
          }`}
        >
          <span className="text-xs mt-0.5 shrink-0 text-gray-400">{index + 1}.</span>
          <span className="line-clamp-2">{section.title}</span>
        </button>
      ))}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  MAIN PAGE COMPONENT                                                */
/* ------------------------------------------------------------------ */
export default function TermsAndConditionsPage() {
  const [activePolicy, setActivePolicy] = useState(policies[0].id);
  const [activeSection, setActiveSection] = useState(policies[0].sections[0].id);
  const [expandedSections, setExpandedSections] = useState<Set<string>>(
    new Set(policies[0].sections.map((s) => s.id))
  );
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [mobileTocOpen, setMobileTocOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const activePolicyData = policies.find((p) => p.id === activePolicy)!;

  // Scroll to top button visibility
  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Track active section on scroll
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-100px 0px -60% 0px", threshold: 0 }
    );

    activePolicyData.sections.forEach((section) => {
      const el = sectionRefs.current[section.id];
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, [activePolicy, activePolicyData]);

  const handlePolicyChange = (policyId: string) => {
    setActivePolicy(policyId);
    const policy = policies.find((p) => p.id === policyId)!;
    setActiveSection(policy.sections[0].id);
    setExpandedSections(new Set(policy.sections.map((s) => s.id)));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSectionClick = (sectionId: string) => {
    setActiveSection(sectionId);
    setMobileTocOpen(false);
    const el = sectionRefs.current[sectionId];
    if (el) {
      const yOffset = -100;
      const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const toggleSection = (sectionId: string) => {
    setExpandedSections((prev) => {
      const next = new Set(prev);
      if (next.has(sectionId)) next.delete(sectionId);
      else next.add(sectionId);
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* ============================================================ */}
      {/*  HERO BANNER                                                  */}
      {/* ============================================================ */}
      <section className="relative bg-[#00252e] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#00a8cc] rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="absolute bottom-0 left-0 w-72 h-72 bg-[#d4a853] rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-6 backdrop-blur-sm">
              <FileText className="w-4 h-4 text-[#00a8cc]" />
              <span className="text-sm text-white/80">Legal Documents</span>
            </div>
            <h1 className="text-3xl md:text-5xl font-bold mb-4">
              Terms &amp; Conditions
            </h1>
            <p className="text-lg text-white/70 max-w-2xl mx-auto">
              Please read these terms carefully before using our platform. Your continued use of MOVA services constitutes acceptance of all applicable policies.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  POLICY TABS                                                  */}
      {/* ============================================================ */}
      <div className="sticky top-0 z-30 bg-white border-b border-gray-200 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex overflow-x-auto scrollbar-hide -mb-px">
            {policies.map((policy) => (
              <button
                key={policy.id}
                onClick={() => handlePolicyChange(policy.id)}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium whitespace-nowrap border-b-2 transition-all duration-200 ${
                  activePolicy === policy.id
                    ? "border-[#00a8cc] text-[#00a8cc]"
                    : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                }`}
              >
                {policy.icon}
                <span className="hidden sm:inline">{policy.title}</span>
                <span className="sm:hidden">{policy.shortTitle}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  MAIN CONTENT AREA (sidebar + content)                        */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Document Info Bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8 bg-white rounded-xl p-4 shadow-sm border border-gray-100">
          <div>
            <h2 className="text-xl font-bold text-[#00252e]">
              {activePolicyData.title}
            </h2>
            <p className="text-sm text-gray-500">
              Last Updated: {activePolicyData.lastUpdated}
            </p>
          </div>
          <a
            href={activePolicyData.pdfPath}
            download
            className="inline-flex items-center gap-2 bg-[#00252e] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-[#003847] transition-colors"
          >
            <Download className="w-4 h-4" />
            Download PDF
          </a>
        </div>

        <div className="flex gap-8">
          {/* -------------------------------------------------------- */}
          {/*  SIDEBAR — Table of Contents (desktop)                    */}
          {/* -------------------------------------------------------- */}
          <aside className="hidden lg:block w-72 shrink-0">
            <div className="sticky top-24 bg-white rounded-xl p-4 shadow-sm border border-gray-100 max-h-[calc(100vh-120px)] overflow-y-auto">
              <TableOfContents
                activePolicy={activePolicy}
                activePolicyData={activePolicyData}
                activeSection={activeSection}
                onSectionClick={handleSectionClick}
              />
            </div>
          </aside>

          {/* -------------------------------------------------------- */}
          {/*  MOBILE TOC TOGGLE                                        */}
          {/* -------------------------------------------------------- */}
          <div className="lg:hidden fixed bottom-20 right-4 z-40">
            <button
              onClick={() => setMobileTocOpen(!mobileTocOpen)}
              className="bg-[#00252e] text-white p-3 rounded-full shadow-lg hover:bg-[#003847] transition-colors"
            >
              <FileText className="w-5 h-5" />
            </button>
          </div>

          {/* Mobile TOC Drawer */}
          {mobileTocOpen && (
            <div className="lg:hidden fixed inset-0 z-50">
              <div
                className="absolute inset-0 bg-black/50"
                onClick={() => setMobileTocOpen(false)}
              />
              <div className="absolute bottom-0 left-0 right-0 bg-white rounded-t-2xl p-6 max-h-[70vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold text-[#00252e]">Table of Contents</h3>
                  <button
                    onClick={() => setMobileTocOpen(false)}
                    className="text-gray-400 hover:text-gray-600"
                  >
                    ✕
                  </button>
                </div>
                <TableOfContents
                  activePolicy={activePolicy}
                  activePolicyData={activePolicyData}
                  activeSection={activeSection}
                  onSectionClick={handleSectionClick}
                />
              </div>
            </div>
          )}

          {/* -------------------------------------------------------- */}
          {/*  CONTENT SECTIONS                                         */}
          {/* -------------------------------------------------------- */}
          <div ref={contentRef} className="flex-1 min-w-0 space-y-4">
            {activePolicyData.sections.map((section, index) => (
              <motion.div
                key={section.id}
                id={section.id}
                ref={(el) => {
                  sectionRefs.current[section.id] = el;
                }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
              >
                {/* Section header (accordion) */}
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-[#00a8cc]/10 text-[#00a8cc] text-xs font-bold shrink-0">
                      {index + 1}
                    </span>
                    <h3 className="text-base font-semibold text-[#00252e]">
                      {section.title}
                    </h3>
                  </div>
                  <ChevronDown
                    className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${
                      expandedSections.has(section.id) ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Section content */}
                {expandedSections.has(section.id) && (
                  <div className="px-5 pb-5 border-t border-gray-100">
                    <div className="pt-4 prose prose-sm max-w-none text-gray-700 prose-headings:text-[#00252e] prose-headings:text-sm prose-headings:font-bold prose-headings:mt-5 prose-headings:mb-2 prose-p:mb-3 prose-p:leading-relaxed prose-ul:my-2 prose-li:my-1 prose-a:text-[#00a8cc] prose-a:no-underline hover:prose-a:underline prose-strong:text-[#00252e] prose-table:mt-2">
                      {section.content}
                    </div>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  COMPANY INFO FOOTER                                          */}
      {/* ============================================================ */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#00252e] rounded-2xl p-8 text-white text-center">
          <h3 className="text-lg font-bold mb-2">MOVA TECHNICAL SOLUTIONS PRIVATE LIMITED</h3>
          <p className="text-white/60 text-sm">
            CIN: U62011AP2025PTC117460 &nbsp;|&nbsp; GST: 37AASCM8654M1ZE &nbsp;|&nbsp;{" "}
            <a href="https://www.mova.org.in" className="text-[#00a8cc] hover:underline" target="_blank" rel="noopener noreferrer">
              www.mova.org.in
            </a>
          </p>
          <p className="text-white/60 text-sm mt-1">
            GSR &amp; KKR Educational Society, Vatticherukuru (M), Vinjanampadu, Guntur, Andhra Pradesh – 522017
          </p>
          <p className="text-white/40 text-xs mt-2">
            Jurisdiction: Hyderabad, Telangana, India
          </p>
        </div>
      </div>

      {/* ============================================================ */}
      {/*  BACK TO TOP                                                  */}
      {/* ============================================================ */}
      {showBackToTop && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="fixed bottom-6 right-6 z-40 bg-[#00a8cc] text-white p-3 rounded-full shadow-lg hover:bg-[#00a8cc]/90 transition-colors"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </div>
  );
}
