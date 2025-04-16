// Updated with 5 user-provided, high-quality, dynamic dental scenarios
const scenarios = [
  {
    id: 1,
    scenarioText: `A final-year dental student is reviewing a patient's chart before their appointment. The patient is a 48-year-old male scheduled for a routine scaling and polishing. The chart notes a past medical history of poorly controlled type 2 diabetes and a recent HbA1c level of 9.5%.`,
    options: [
      { id: "1", text: "Proceed with the routine scaling and polishing as planned." },
      { id: "2", text: "Only perform the polishing and avoid scaling to minimize potential bleeding." },
      { id: "3", text: "Proceed with the scaling and polishing but take extra precautions and provide specific post-operative instructions." },
      { id: "4", text: "Postpone the procedure and advise the patient to get their blood sugar under better control first." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the implications of poorly controlled diabetes on oral health and healing.",
      "Think about the risks associated with dental procedures in such patients.",
      "What modifications to the standard protocol might be necessary?"
    ],
    mainExplanation: `While poorly controlled diabetes increases the risk of complications like infection and delayed healing, routine scaling and polishing can still be performed with caution. Extra precautions should include meticulous technique, ensuring good hemostasis, and providing the patient with detailed post-operative instructions focusing on oral hygiene and monitoring for any signs of infection. It's also important to advise the patient on the importance of managing their diabetes.`,
    optionExplanations: {
      "1": "Ignoring the patient's poorly controlled diabetes could lead to complications.",
      "2": "Scaling is crucial for removing calculus and addressing periodontal health, which is often compromised in diabetic patients.",
      "3": "This is correct. Proceed with the scaling and polishing but take extra precautions and provide specific post-operative instructions.",
      "4": "While ideal, delaying necessary dental care indefinitely might not be practical. Proceeding with precautions is often the better approach."
    }
  },
  {
    id: 2,
    scenarioText: `During a community dental outreach program, a dental student encounters a 16-year-old boy with several missing anterior teeth and noticeable staining and erosion on the remaining teeth. When questioned, the boy reveals a habit of regularly consuming a locally produced, highly acidic, sweetened beverage.`,
    options: [
      { id: "1", text: "The boy might have an underlying systemic condition affecting his teeth." },
      { id: "2", text: "The staining and erosion are indicative of poor brushing habits." },
      { id: "3", text: "The tooth loss is likely due to trauma from playing sports." },
      { id: "4", text: "The frequent consumption of the acidic beverage is the most probable cause of the dental issues." }
    ],
    correctAnswerId: "4",
    hints: [
      "Consider the effects of acidic substances on tooth enamel.",
      "Think about the pattern of tooth loss and erosion.",
      "Is there a direct link between dietary habits and dental health?"
    ],
    mainExplanation: `The combination of missing anterior teeth (likely due to severe caries), staining, and significant erosion strongly suggests dental erosion caused by the frequent intake of a highly acidic, sweetened beverage. This habit leads to the dissolution of tooth enamel over time.`,
    optionExplanations: {
      "1": "While some systemic conditions can affect teeth, the clear history of high acidic beverage consumption makes this the most likely culprit.",
      "2": "While poor oral hygiene can contribute to staining and caries, the significant erosion is more indicative of acid exposure.",
      "3": "While trauma can cause tooth loss, the widespread staining and erosion on the remaining teeth point towards a chemical cause.",
      "4": "This is correct. The frequent consumption of the acidic beverage is the most probable cause of the dental issues."
    }
  },
  {
    id: 3,
    scenarioText: `A dental intern is reviewing a post-operative panoramic radiograph of a patient who underwent surgical removal of an impacted mandibular third molar. The intern notices a small, radiopaque fragment in the surgical site that was not visible on the pre-operative radiograph.`,
    options: [
      { id: "1", text: "It could be a small piece of bone that fractured during the procedure." },
      { id: "2", text: "It might be a retained root tip or a piece of the surgical bur." },
      { id: "3", text: "This is likely a normal finding after surgical extraction." },
      { id: "4", text: "It is probably just a radiographic artifact and nothing to worry about." }
    ],
    correctAnswerId: "2",
    hints: [
      "Consider the materials used during surgical extractions.",
      "Think about the potential complications of such procedures.",
      "What could be the source of a new radiopaque object in the surgical site?"
    ],
    mainExplanation: `A new radiopaque fragment in the surgical site post-extraction is unlikely to be normal. It could represent a retained root tip that fractured during the extraction or, less commonly, a fragment of a surgical instrument like a bur. Further investigation and potentially surgical retrieval might be necessary.`,
    optionExplanations: {
      "1": "While bone fragments can occur, they usually have an irregular shape and are less densely radiopaque than a root tip or bur fragment.",
      "2": "This is correct. It might be a retained root tip or a piece of the surgical bur.",
      "3": "New radiopaque fragments are not a typical finding after uneventful extractions.",
      "4": "While artifacts can occur, a distinct radiopaque object in the surgical site warrants investigation."
    }
  },
  {
    id: 4,
    scenarioText: `A general dental practitioner in a busy clinic is running behind schedule. A patient presents with a chief complaint of a chipped anterior tooth (#11) and requests an immediate restoration. The dentist quickly examines the tooth and notes a small enamel fracture without pulpal involvement.`,
    options: [
      { id: "1", text: "The dentist should inform the patient about the delay and schedule a separate appointment for the restoration." },
      { id: "2", text: "The dentist should refer the patient to a specialist for this minor cosmetic issue." },
      { id: "3", text: "The dentist should offer a temporary fix and schedule a more comprehensive evaluation and treatment plan." },
      { id: "4", text: "The dentist should immediately proceed with a direct composite restoration to address the patient's request." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the importance of proper diagnosis and treatment planning, even for seemingly simple cases.",
      "Think about the potential underlying causes of the chipped tooth.",
      "What are the ethical considerations of rushing treatment?"
    ],
    mainExplanation: `While the patient desires an immediate restoration, rushing into treatment without a proper evaluation might not address the underlying cause of the chipped tooth (e.g., malocclusion, parafunctional habits). Offering a temporary fix (like smoothing the sharp edges) and scheduling a follow-up appointment for a thorough assessment and a comprehensive treatment plan is the most responsible approach.`,
    optionExplanations: {
      "1": "While scheduling is necessary, offering a temporary fix shows care for the patient's immediate concern.",
      "2": "A simple enamel fracture can usually be managed by a general dentist.",
      "3": "This is correct. The dentist should offer a temporary fix and schedule a more comprehensive evaluation and treatment plan.",
      "4": "Rushing without proper evaluation might lead to a restoration that doesn't address the root cause or might not be the most appropriate long-term solution."
    }
  },
  {
    id: 5,
    scenarioText: `A dental student is learning to interpret dental radiographs. They are looking at a periapical radiograph of the lower left quadrant and notice a well-defined radiolucency at the apex of a mandibular premolar with no apparent caries or history of trauma to the tooth. The lamina dura appears intact around the root.`,
    options: [
      { id: "1", text: "Mental Foramen" },
      { id: "2", text: "Periapical Abscess" },
      { id: "3", text: "Odontogenic Keratocyst (OKC)" },
      { id: "4", text: "Radicular Cyst (Periapical Cyst)" }
    ],
    correctAnswerId: "1",
    hints: [
      "Consider the location and radiographic appearance of the lesion.",
      "Think about the vitality of the tooth in question (implied by no caries or trauma).",
      "What anatomical structures could mimic a periapical radiolucency?"
    ],
    mainExplanation: `The mental foramen, which transmits the mental nerve and vessels, is a normal anatomical structure that can sometimes appear as a well-defined radiolucency near the apex of the mandibular premolars on a periapical radiograph. The absence of caries or trauma suggests the tooth is likely vital, making a periapical abscess or radicular cyst less likely. An OKC is more often associated with impacted teeth or a more aggressive radiographic appearance. The intact lamina dura also points towards a normal anatomical structure.`,
    optionExplanations: {
      "1": "This is correct. Mental Foramen.",
      "2": "Usually associated with a non-vital tooth due to caries or trauma, leading to pulpal necrosis.",
      "3": "Typically presents with a more scalloped border and can occur in various locations in the jaws.",
      "4": "Also develops as a result of pulpal necrosis and periapical inflammation."
    }
  },
  {
    id: 6,
    difficulty: "medium",
    scenarioText: `A dental student is shadowing a prosthodontist who is delivering a new set of complete dentures to an elderly patient. After insertion, the patient complains that the upper denture feels loose and keeps dropping down when they open their mouth wide or try to eat. On examination, the denture borders appear to be of adequate length and extension.`,
    options: [
      { id: "1", text: "The patient needs more time to get used to the new dentures." },
      { id: "2", text: "There might be insufficient saliva for adequate retention." },
      { id: "3", text: "The posterior palatal seal of the upper denture might be inadequate." },
      { id: "4", text: "The patient's tongue movements are likely displacing the denture." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the key factors responsible for upper denture retention.",
      "Think about the anatomy of the palate and its role in denture stability.",
      "What could cause a lack of suction in the upper denture?"
    ],
    explanation: `Correct Answer: 3. The posterior palatal seal of the upper denture might be inadequate.\nRationale: The posterior palatal seal is a critical component for upper denture retention. It provides suction by creating a seal between the posterior border of the denture and the soft palate. An inadequate seal will lead to loss of retention, especially during wide mouth opening or functional movements.\nWhy other options are incorrect:\nThe patient needs more time to get used to the new dentures: While adaptation is necessary, immediate and significant looseness upon function points to a fabrication or fit issue.\nThere might be insufficient saliva for adequate retention: While saliva plays a role in retention, a properly designed upper denture with a good posterior palatal seal should have adequate retention even with slightly reduced salivary flow.\nThe patient's tongue movements are likely displacing the denture: Tongue movements are more likely to affect the stability of the lower denture.`
  },
  {
    id: 7,
    difficulty: "medium",
    scenarioText: `A dental intern is asked to take impressions for a patient who needs a single crown on their mandibular first molar (#36). The tooth has been prepared with subgingival margins. During the impression-taking procedure using a conventional elastomeric impression material, the intern notices blood and crevicular fluid contaminating the impression material around the prepared margin.`,
    options: [
      { id: "1", text: "Proceed with pouring the impression as the contamination is minor." },
      { id: "2", text: "Rinse the impression thoroughly with water and then pour it." },
      { id: "3", text: "Disinfect the impression and pour it after ensuring the contamination doesn't affect the margin detail." },
      { id: "4", text: "Discard the impression and retake it after achieving better moisture control." }
    ],
    correctAnswerId: "4",
    hints: [
      "Consider the importance of accurate reproduction of the prepared margin for crown fabrication.",
      "Think about how blood and saliva can affect the impression material.",
      "What is the best course of action to ensure a successful outcome?"
    ],
    explanation: `Correct Answer: 4. Discard the impression and retake it after achieving better moisture control.\nRationale: Blood and crevicular fluid contamination around the prepared subgingival margin will compromise the accuracy of the impression, especially the critical details needed for a well-fitting crown. It is essential to achieve proper moisture control (using retraction cords or other methods) and retake the impression to ensure an accurate reproduction of the prepared tooth structure.\nWhy other options are incorrect:\nProceed with pouring the impression as the contamination is minor: Even minor contamination can lead to inaccuracies in the final restoration.\nRinse the impression thoroughly with water and then pour it: Rinsing might remove some surface contamination but won't restore the accuracy of the recorded margin detail.\nDisinfect the impression and pour it after ensuring the contamination doesn't affect the margin detail: It's difficult to reliably determine if the contamination has compromised the margin detail. Retaking the impression is the safest approach.`
  },
  {
    id: 8,
    difficulty: "medium",
    scenarioText: `A dental student is observing an oral surgeon performing a biopsy of a suspicious lesion on the palate. After the procedure, the surgeon places the tissue sample in a container with formalin solution and hands it to the student, instructing them to send it to the oral pathology lab. The student notices that the lab request form is incomplete, lacking the patient's name and the exact site of the biopsy.`,
    options: [
      { id: "1", text: "Send the sample to the lab immediately to avoid any delay in diagnosis." },
      { id: "2", text: "Add the patient's name based on their memory and send it." },
      { id: "3", text: "Immediately inform the oral surgeon about the incomplete form before sending the sample." },
      { id: "4", text: "Ask another student who might know the patient's details to complete the form." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the importance of accurate labeling and documentation in pathology.",
      "Think about the potential consequences of sending an improperly labeled sample.",
      "What is the correct protocol for handling biopsy samples?"
    ],
    explanation: `Correct Answer: 3. Immediately inform the oral surgeon about the incomplete form before sending the sample.\nRationale: Accurate labeling of biopsy samples is crucial for correct diagnosis and patient management. Sending an incomplete form can lead to errors in identification and reporting. The student should immediately bring this to the attention of the oral surgeon so they can complete the form accurately before the sample is sent to the lab.\nWhy other options are incorrect:\nSend the sample to the lab immediately to avoid any delay in diagnosis: Sending an improperly labeled sample can cause more delays and confusion later.\nAdd the patient's name based on their memory and send it: Relying on memory can lead to errors, and it's not the student's responsibility to guess patient information.\nAsk another student who might know the patient's details to complete the form: This is unprofessional and could lead to further inaccuracies.`
  },
  {
    id: 9,
    difficulty: "medium",
    scenarioText: `A patient who is undergoing orthodontic treatment with fixed appliances returns for a routine adjustment appointment. During the clinical examination, the orthodontist notices several areas of enamel demineralization (white spot lesions) around the brackets, particularly in the anterior region. The patient admits to not being very diligent with their oral hygiene despite previous instructions.`,
    options: [
      { id: "1", text: "Remove the brackets immediately to prevent further demineralization." },
      { id: "2", text: "Reinforce oral hygiene instructions and schedule the next appointment as usual." },
      { id: "3", text: "Incorporate fluoride therapy and consider a temporary pause in active orthodontic treatment until oral hygiene improves." },
      { id: "4", text: "Apply a sealant over the demineralized areas and continue with the orthodontic adjustments." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the primary cause of enamel demineralization around orthodontic brackets.",
      "Think about the importance of patient compliance in orthodontic treatment.",
      "What are the appropriate measures to manage and prevent further demineralization?"
    ],
    explanation: `Correct Answer: 3. Incorporate fluoride therapy and consider a temporary pause in active orthodontic treatment until oral hygiene improves.\nRationale: Enamel demineralization around orthodontic brackets is primarily due to inadequate plaque control. While reinforcing oral hygiene instructions is important, incorporating fluoride therapy (e.g., fluoride mouthwash, topical fluoride application) can help remineralize early lesions and prevent further progression. Temporarily pausing active orthodontic treatment might be necessary to allow the patient to focus on improving their oral hygiene and prevent further damage during tooth movement.\nWhy other options are incorrect:\nRemove the brackets immediately to prevent further demineralization: This is a drastic measure and might not be necessary if oral hygiene can be improved.\nReinforce oral hygiene instructions and schedule the next appointment as usual: While important, simply repeating instructions might not be sufficient if the patient has consistently struggled with oral hygiene.\nApply a sealant over the demineralized areas and continue with the orthodontic adjustments: While sealants can help, addressing the underlying cause of poor oral hygiene is crucial for long-term success.`
  },
  {
    id: 10,
    difficulty: "medium",
    scenarioText: `A dental student is assisting in the fabrication of a custom tray for fluoride application for a patient with rampant caries. After taking the primary impression and pouring it in plaster, the student notices several small air bubbles on the surface of the cast, particularly in the areas of the teeth.`,
    options: [
      { id: "1", text: "Proceed with fabricating the custom tray on this cast as the bubbles are small." },
      { id: "2", text: "Fill the air bubbles with wax and then fabricate the tray." },
      { id: "3", text: "Repour the primary impression to obtain a more accurate cast without air bubbles." },
      { id: "4", text: "Inform the senior resident about the air bubbles but proceed with the fabrication if instructed." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the importance of an accurate cast for a well-fitting custom tray.",
      "Think about how air bubbles can affect the adaptation of the tray.",
      "What is the best way to ensure the tray accurately fits the patient's teeth?"
    ],
    explanation: `Correct Answer: 3. Repour the primary impression to obtain a more accurate cast without air bubbles.\nRationale: Air bubbles on the primary cast will result in corresponding inaccuracies on the custom tray. This will affect the fit of the tray and the effectiveness of the fluoride application. The best course of action is to repour the impression carefully to obtain a cast with smooth and accurate surfaces, especially in the areas of the teeth.\nWhy other options are incorrect:\nProceed with fabricating the custom tray on this cast as the bubbles are small: Even small bubbles can compromise the fit of the tray.\nFill the air bubbles with wax and then fabricate the tray: While this might seem like a quick fix, it can introduce further inaccuracies and doesn't address the underlying issue with the cast.\nInform the senior resident about the air bubbles but proceed with the fabrication if instructed: While informing the supervisor is important, proceeding with a flawed cast will likely lead to a poorly fitting tray.`
  },
  {
    id: 11,
    difficulty: "medium",
    scenarioText: `A dental student is assisting in the emergency department of a hospital. A young adult male presents with severe pain and swelling in the lower left jaw following a road traffic accident. On examination, there is obvious facial asymmetry, crepitus upon palpation of the mandible, and difficulty in opening the mouth.`,
    options: [
      { id: "1", text: "Temporomandibular joint dislocation." },
      { id: "2", text: "Dental abscess with cellulitis." },
      { id: "3", text: "Fracture of the mandible." },
      { id: "4", text: "Severe muscle spasm." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the history of trauma and the clinical signs.",
      "Think about the characteristic features of jaw fractures.",
      "What diagnostic investigation would be most helpful in this situation?"
    ],
    explanation: `Correct Answer: 3. Fracture of the mandible.\nRationale: The history of trauma (road traffic accident), facial asymmetry, crepitus (a crackling or grating sound or sensation), and difficulty in opening the mouth (trismus) are all strong indicators of a mandibular fracture.\nWhy other options are incorrect:\nTemporomandibular joint dislocation: Usually presents with the jaw locked open or closed, and the condyle might be palpable in an abnormal position. While trauma can cause it, crepitus is less common.\nDental abscess with cellulitis: Typically involves severe pain and swelling of dental origin, often with redness and warmth. Crepitus is less common unless there is gas formation in the tissues.\nSevere muscle spasm: Can cause difficulty in opening the mouth (trismus) but is less likely to be associated with facial asymmetry and crepitus following significant trauma.`
  },
  {
    id: 12,
    difficulty: "medium",
    scenarioText: `A dental hygienist is providing oral hygiene instructions to a new patient who has just started orthodontic treatment with fixed appliances. The patient expresses concern about the difficulty in cleaning around the brackets and wires.`,
    options: [
      { id: "1", text: "Advise the patient that thorough cleaning with a regular toothbrush is sufficient." },
      { id: "2", text: "Recommend using only a strong fluoride mouthwash to keep the teeth clean." },
      { id: "3", text: "Demonstrate the use of specialized oral hygiene aids like interdental brushes, floss threaders, and a water flosser." },
      { id: "4", text: "Tell the patient not to worry too much about cleaning as long as they visit the clinic regularly for check-ups." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the challenges of maintaining oral hygiene with fixed orthodontic appliances.",
      "Think about the areas that are most prone to plaque accumulation.",
      "What specific tools are designed for cleaning around brackets and wires?"
    ],
    explanation: `Correct Answer: 3. Demonstrate the use of specialized oral hygiene aids like interdental brushes, floss threaders, and a water flosser.\nRationale: Maintaining adequate oral hygiene with fixed orthodontic appliances requires more than just a regular toothbrush. Interdental brushes are essential for cleaning between brackets and wires, floss threaders help in passing floss under the archwire, and a water flosser can aid in removing food debris and plaque.\nWhy other options are incorrect:\nAdvise the patient that thorough cleaning with a regular toothbrush is sufficient: A regular toothbrush alone is often inadequate for cleaning around brackets and wires.\nRecommend using only a strong fluoride mouthwash to keep the teeth clean: While fluoride mouthwash is beneficial, it doesn't physically remove plaque and debris.\nTell the patient not to worry too much about cleaning as long as they visit the clinic regularly for check-ups: Regular check-ups are important, but the patient needs to maintain good oral hygiene at home to prevent complications like enamel demineralization and gingivitis.`
  },
  {
    id: 13,
    difficulty: "medium",
    scenarioText: `A dental laboratory is preparing to fabricate a new set of complete dentures for a patient. The dentist has sent the final impressions and the jaw relation records. Upon examining the records, the lab technician notices that the vertical dimension of occlusion (VDO) seems significantly increased compared to the patient's natural dentition (as indicated in the patient's old records).`,
    options: [
      { id: "1", text: "Proceed with fabricating the dentures based on the provided records." },
      { id: "2", text: "Slightly reduce the vertical dimension during fabrication as a precaution." },
      { id: "3", text: "Contact the dentist to clarify and potentially obtain new jaw relation records." },
      { id: "4", text: "Increase the vertical dimension even further as it might improve the patient's facial aesthetics." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the consequences of an incorrect vertical dimension in complete dentures.",
      "Think about the importance of accurate jaw relation records.",
      "What is the best course of action when there is a discrepancy in the records?"
    ],
    explanation: `Correct Answer: 3. Contact the dentist to clarify and potentially obtain new jaw relation records.\nRationale: An incorrect vertical dimension of occlusion in complete dentures can lead to various problems like discomfort, difficulty in chewing, muscle fatigue, and altered facial aesthetics. If the lab technician suspects a significant error in the provided records, they should immediately contact the dentist to clarify and potentially request new, more accurate jaw relation records before proceeding with the fabrication.\nWhy other options are incorrect:\nProceed with fabricating the dentures based on the provided records: Fabricating dentures with an incorrect VDO will likely lead to patient dissatisfaction and functional issues.\nSlightly reduce the vertical dimension during fabrication as a precaution: The technician should not arbitrarily alter the records provided by the dentist.\nIncrease the vertical dimension even further as it might improve the patient's facial aesthetics: This would exacerbate the potential problems associated with an increased VDO.`
  },
  {
    id: 14,
    difficulty: "medium",
    scenarioText: `A dental student is assisting a pediatric dentist during a fluoride varnish application on a 4-year-old child. The child starts to cry and becomes uncooperative during the procedure, moving their head and trying to bite down.`,
    options: [
      { id: "1", text: "Forcefully hold the child's mouth open to complete the application quickly." },
      { id: "2", text: "Ask the parent to restrain the child tightly." },
      { id: "3", text: "Stop the procedure immediately and reschedule the appointment for a later date." },
      { id: "4", text: "Try to calm the child down, explain the procedure in simple terms, and proceed gently with assistance from the parent." }
    ],
    correctAnswerId: "4",
    hints: [
      "Consider the importance of child behavior management in pediatric dentistry.",
      "Think about ethical considerations and the child's comfort.",
      "What are appropriate techniques for managing an uncooperative child in the dental setting?"
    ],
    explanation: `Correct Answer: 4. Try to calm the child down, explain the procedure in simple terms, and proceed gently with assistance from the parent.\nRationale: Effective communication and gentle behavior management techniques are crucial in pediatric dentistry. The student should attempt to calm the child, explain the procedure in a way they can understand, and proceed slowly and carefully with the parent's assistance. Using a tell-show-do approach can be helpful.\nWhy other options are incorrect:\nForcefully hold the child's mouth open to complete the application quickly: This can be traumatic for the child and erode trust.\nAsk the parent to restrain the child tightly: While parental assistance might be needed, forceful restraint should be avoided.\nStop the procedure immediately and reschedule the appointment for a later date: While rescheduling might be necessary if the child remains uncooperative, an attempt to manage the behavior should be made first.`
  },
  {
    id: 15,
    difficulty: "medium",
    scenarioText: `A dental practice is implementing a new electronic health record (EHR) system. The front desk staff is having difficulty adapting to the new system, leading to delays in patient check-in and appointment scheduling. Some patient records have also been inadvertently duplicated.`,
    options: [
      { id: "1", text: "Continue using the old paper-based system alongside the EHR to ensure smooth operations." },
      { id: "2", text: "Blame the front desk staff for not being able to adapt quickly enough." },
      { id: "3", text: "Provide additional training and support to the front desk staff on using the new EHR system." },
      { id: "4", text: "Switch back to the old paper-based system as the EHR is causing too many problems." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the long-term benefits of using an EHR system.",
      "Think about the challenges involved in implementing new technology.",
      "What steps can be taken to address the difficulties faced by the staff?"
    ],
    explanation: `Correct Answer: 3. Provide additional training and support to the front desk staff on using the new EHR system.\nRationale: Implementing a new EHR system can be challenging, and staff might require adequate training and ongoing support to adapt effectively. Providing additional training, resources, and dedicated support will help the front desk staff overcome their difficulties and ensure the smooth functioning of the new system.\nWhy other options are incorrect:\nContinue using the old paper-based system alongside the EHR to ensure smooth operations: This defeats the purpose of implementing an EHR and can lead to confusion and errors.\nBlame the front desk staff for not being able to adapt quickly enough: Blaming staff is counterproductive. Providing support is a better approach.\nSwitch back to the old paper-based system as the EHR is causing too many problems: While tempting, this would mean losing the potential benefits of an EHR system. Addressing the implementation challenges is a more strategic solution.`
  },
  {
    id: 16,
    scenarioText: `A 50-year-old male patient, a known smoker for 30 years, presents for a routine dental check-up. On intraoral examination, a small, painless, white patch is noted on the floor of the mouth. The patient states he first noticed it a few weeks ago and it hasn't gone away.`,
    options: [
      { id: "1", text: "Linea Alba" },
      { id: "2", text: "Fordyce Spots" },
      { id: "3", text: "Candidiasis" },
      { id: "4", text: "Leukoplakia" }
    ],
    correctAnswerId: "4",
    hints: [
      "Consider the patient's smoking history and the location of the lesion.",
      "Think about the clinical characteristics of the different options.",
      "Is it possible for seemingly benign lesions to have potential significance?"
    ],
    explanation: `Correct Answer: Option 4. Leukoplakia\nRationale: A persistent, painless white patch on the floor of the mouth in a long-term smoker is a classic presentation of leukoplakia, a potentially premalignant lesion. Due to the high risk of malignant transformation in this location and in smokers, further investigation (biopsy) is warranted.\nWhy other options are incorrect:\nOption 1: A white line that runs along the buccal mucosa at the occlusal plane, caused by cheek biting.\nOption 2: These are ectopic sebaceous glands and appear as small, yellowish-white papules, usually on the buccal mucosa and lips.\nOption 3: Typically presents as white, curd-like plaques that can be wiped off, often associated with pain or burning sensation.`
  },
  {
    id: 17,
    scenarioText: `A dental intern is asked to assist in the management of a patient experiencing a medical emergency in the dental clinic. The patient, who had just received local anesthesia for a tooth extraction, suddenly becomes pale, sweaty, and reports feeling dizzy and nauseous. Their blood pressure is recorded as 90/60 mmHg, and their pulse is rapid and weak.`,
    options: [
      { id: "1", text: "Hyperventilation" },
      { id: "2", text: "Local Anesthetic Toxicity" },
      { id: "3", text: "Vasovagal Syncope" },
      { id: "4", text: "Anaphylactic Reaction" }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the timing of the onset of symptoms in relation to the procedure.",
      "Think about the typical signs and symptoms of each condition.",
      "What are the immediate management steps?"
    ],
    explanation: `Correct Answer: Option 3. Vasovagal Syncope\nRationale: The sudden onset of pallor, sweating, dizziness, nausea, low blood pressure, and a rapid, weak pulse after a stressful procedure like a tooth extraction is highly suggestive of vasovagal syncope (fainting). This is a common reaction triggered by anxiety, pain, or the sight of blood.\nWhy other options are incorrect:\nOption 1: Usually presents with rapid, deep breathing, tingling sensations, and potentially carpopedal spasms.\nOption 2: Can cause a range of symptoms depending on the dose and the patient, including anxiety, tremors, seizures, and cardiovascular changes, but the presentation here is more characteristic of syncope.\nOption 4: Typically involves more severe symptoms like hives, swelling of the face and throat, difficulty breathing, and a significant drop in blood pressure, often occurring rapidly after exposure to an allergen.`
  },
  {
    id: 18,
    scenarioText: `A dental student is reviewing the records of a child patient who is scheduled for a pulpotomy on a primary molar with a deep carious lesion. The student notices a notation in the child's medical history indicating a severe allergy to latex.`,
    options: [
      { id: "1", text: "Use non-latex gloves but proceed with a latex rubber dam as the contact is minimal." },
      { id: "2", text: "Postpone the procedure and refer the child to a specialist who is more experienced in managing latex allergies." },
      { id: "3", text: "Use non-latex gloves and a non-latex rubber dam or alternative isolation method for the procedure." },
      { id: "4", text: "Proceed with the pulpotomy using standard latex gloves and rubber dam." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the severity of the patient's allergy.",
      "Think about the potential sources of latex in dental materials.",
      "What is the safest approach for managing a patient with a known allergy?"
    ],
    explanation: `Correct Answer: Option 3. Use non-latex gloves and a non-latex rubber dam or alternative isolation method for the procedure.\nRationale: For a patient with a severe latex allergy, it is crucial to avoid all contact with latex-containing materials. This includes gloves and the rubber dam. Using non-latex alternatives for both is essential to prevent a potentially life-threatening allergic reaction.\nWhy other options are incorrect:\nOption 1: Even minimal contact can be dangerous for someone with a severe allergy.\nOption 2: While consulting a specialist might be considered in complex cases, a general dentist should be able to safely perform a pulpotomy using latex-free materials.\nOption 4: This could trigger a severe allergic reaction.`
  },
  {
    id: 19,
    scenarioText: `A dental practice owner is reviewing the financial reports for the past quarter. They notice a significant increase in the cost of dental materials, particularly impression materials and gypsum products.`,
    options: [
      { id: "1", text: "Negotiate better rates with the current suppliers or explore alternative suppliers." },
      { id: "2", text: "Reduce the number of appointments to conserve materials." },
      { id: "3", text: "Increase the fees for all dental procedures to compensate for the increased material costs." },
      { id: "4", text: "Start using cheaper, lower-quality materials to reduce expenses." }
    ],
    correctAnswerId: "1",
    hints: [
      "Consider the impact of increased costs on the practice's profitability.",
      "Think about ethical considerations regarding patient care and material quality.",
      "What are some sustainable and responsible ways to manage expenses?"
    ],
    explanation: `Correct Answer: Option 1. Negotiate better rates with the current suppliers or explore alternative suppliers.\nRationale: This is the most responsible and sustainable approach to managing increased material costs without compromising patient care. Negotiating with existing suppliers for better pricing or exploring options with other reputable suppliers can help reduce expenses while maintaining quality.\nWhy other options are incorrect:\nOption 2: This would negatively impact patient care and the practice's revenue.\nOption 3: While this might improve profitability, it could make dental care less accessible to patients.\nOption 4: This can compromise the quality of dental restorations and potentially lead to patient dissatisfaction and future problems.`
  },
  {
    id: 20,
    scenarioText: `A patient presents to the dental clinic with a complaint of a persistent, foul taste in their mouth that they cannot get rid of, despite maintaining good oral hygiene. They deny any pain or visible lesions in their mouth.`,
    options: [
      { id: "1", text: "Reassure the patient that it is likely just a temporary issue and will resolve on its own." },
      { id: "2", text: "Thoroughly examine the patient for any signs of local infection or hidden pathology." },
      { id: "3", text: "Recommend a stronger mouthwash and advise the patient to brush more frequently." },
      { id: "4", text: "Suspect a systemic medical condition and advise the patient to consult their physician." }
    ],
    correctAnswerId: "2",
    hints: [
      "Consider the potential causes of persistent bad taste.",
      "Think about both local and systemic factors.",
      "What is the importance of a thorough clinical examination?"
    ],
    explanation: `Correct Answer: Option 2. Thoroughly examine the patient for any signs of local infection or hidden pathology.\nRationale: A persistent foul taste, even with good oral hygiene, warrants a thorough intraoral and extraoral examination to rule out any local causes like a hidden dental infection, periodontal issues, tonsillar stones, or even an early stage of a lesion that might not be visually obvious.\nWhy other options are incorrect:\nOption 1: Ignoring a persistent symptom without proper investigation is not good clinical practice.\nOption 3: While good oral hygiene is important, this might not address the underlying cause of the persistent foul taste.\nOption 4: While systemic conditions can cause taste disturbances, ruling out local dental causes first is prudent.`
  },
  {
    id: 21,
    scenarioText: `A dental student is observing a senior dentist administering local anesthesia for a mandibular block. After inserting the needle and before depositing the anesthetic solution, the patient suddenly reports a sharp, electric shock-like pain radiating down their jaw.`,
    options: [
      { id: "1", text: "The dentist has likely contacted the inferior alveolar nerve directly." },
      { id: "2", text: "The patient is likely just anxious about the injection." },
      { id: "3", text: "The needle has probably hit a blood vessel." },
      { id: "4", text: "The anesthetic solution is being injected too quickly." }
    ],
    correctAnswerId: "1",
    hints: [
      "Consider the anatomical structures in the vicinity of the injection site for a mandibular block.",
      "Think about the type of pain described by the patient.",
      "What is the appropriate response in this situation?"
    ],
    explanation: `Correct Answer: Option 1. The dentist has likely contacted the inferior alveolar nerve directly.\nRationale: The description of a sharp, electric shock-like pain radiating down the jaw during the administration of a mandibular block strongly suggests that the needle tip has made direct contact with the inferior alveolar nerve.\nWhy other options are incorrect:\nOption 2: While anxiety can cause various sensations, the specific description of electric shock-like pain is more indicative of nerve contact.\nOption 3: Hitting a blood vessel would typically result in bleeding or a hematoma, not the described type of pain.\nOption 4: Injecting the anesthetic solution too quickly can cause discomfort and tissue distension, but not usually a sharp, shooting pain.`
  },
  {
    id: 22,
    scenarioText: `A dental hygienist is reviewing the periodontal charting of a patient who has been coming to the clinic for regular maintenance for the past five years. The hygienist notices a significant increase in probing depths and bleeding on probing in several areas compared to the previous recordings. The patient reports no changes in their oral hygiene routine.`,
    options: [
      { id: "1", text: "The patient is likely not being completely honest about their oral hygiene habits." },
      { id: "2", text: "The patient might have developed a more aggressive form of periodontal disease." },
      { id: "3", text: "The hygienist's probing technique might have varied between appointments." },
      { id: "4", text: "The patient could be experiencing hormonal changes affecting their gums." }
    ],
    correctAnswerId: "2",
    hints: [
      "Consider the progression of periodontal disease.",
      "Think about factors that can influence periodontal health.",
      "What are the possible explanations for a sudden deterioration in periodontal status?"
    ],
    explanation: `Correct Answer: Option 2. The patient might have developed a more aggressive form of periodontal disease.\nRationale: A significant increase in probing depths and bleeding on probing over a relatively short period, despite no reported changes in oral hygiene, could indicate the development of a more aggressive form of periodontal disease that is progressing rapidly.\nWhy other options are incorrect:\nOption 1: While possible, it's important to consider other factors before assuming patient non-compliance.\nOption 3: While variations in technique can occur, a significant increase across multiple sites is less likely due to this alone.\nOption 4: Hormonal changes can affect gingival inflammation, but a significant increase in probing depths suggests periodontal attachment loss, which is more indicative of disease progression.`
  },
  {
    id: 23,
    scenarioText: `A dental practice manager is analyzing patient feedback forms. Several patients have commented on the long waiting times for appointments and the difficulty in getting through to the clinic on the phone.`,
    options: [
      { id: "1", text: "Advise the patients to be more patient as the clinic is very busy." },
      { id: "2", text: "Ignore the feedback as a few complaints are expected in a busy practice." },
      { id: "3", text: "Evaluate the current appointment scheduling system and phone answering protocols to identify areas for improvement." },
      { id: "4", text: "Hire more dentists to reduce the appointment waiting times." }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the importance of patient satisfaction and retention.",
      "Think about the impact of waiting times and communication on patient experience.",
      "What are proactive steps to address these issues?"
    ],
    explanation: `Correct Answer: Option 3. Evaluate the current appointment scheduling system and phone answering protocols to identify areas for improvement.\nRationale: Addressing patient feedback regarding long waiting times and difficulty in phone communication is crucial for patient satisfaction. Evaluating the current systems and protocols will help identify bottlenecks and areas where changes can be made to improve efficiency and patient access.\nWhy other options are incorrect:\nOption 1: This is unprofessional and doesn't address the underlying issues.\nOption 2: Ignoring patient feedback can lead to dissatisfaction and loss of patients.\nOption 4: Hiring more dentists might be a long-term solution, but optimizing current systems should be the first step.`
  },
  {
    id: 24,
    scenarioText: `A dental student is learning about impression materials. They are asked to choose an appropriate impression material for taking a final impression for a complete denture in an edentulous patient with healthy soft tissues.`,
    options: [
      { id: "1", text: "Alginate" },
      { id: "2", text: "Zinc Oxide Eugenol (ZOE) impression paste" },
      { id: "3", text: "Polyether" },
      { id: "4", text: "Impression Compound" }
    ],
    correctAnswerId: "3",
    hints: [
      "Consider the requirements for a final impression for complete dentures.",
      "Think about the properties of each impression material.",
      "Which material offers good detail reproduction and dimensional stability?"
    ],
    explanation: `Correct Answer: Option 3. Polyether\nRationale: Polyether is an elastomeric impression material known for its high accuracy, good detail reproduction, and dimensional stability, making it an excellent choice for final impressions in complete denture fabrication, especially in patients with healthy soft tissues.\nWhy other options are incorrect:\nOption 1: Alginate is generally used for preliminary impressions due to its lower accuracy and dimensional stability compared to elastomeric materials.\nOption 2: ZOE impression paste is often used for wash impressions in custom trays for complete dentures, providing good detail but less elasticity.\nOption 4: Impression compound is a thermoplastic material used for preliminary impressions or border molding in complete denture fabrication.`
  },
  {
    id: 25,
    scenarioText: `A dental intern is reviewing the pre-operative instructions given to a patient scheduled for a surgical extraction of a lower wisdom tooth. The instructions mention avoiding vigorous rinsing for the first 24 hours. The patient calls the clinic on the evening of the surgery complaining of persistent bleeding and asks if they should rinse their mouth.`,
    options: [
      { id: "1", text: "Advise the patient to start rinsing vigorously with warm salt water immediately." },
      { id: "2", text: "Reiterate the instructions to avoid vigorous rinsing and advise applying gentle pressure with a gauze pack." },
      { id: "3", text: "Tell the patient that some bleeding is normal and not to worry." },
      { id: "4", text: "Ask the patient to come back to the clinic immediately for an examination." }
    ],
    correctAnswerId: "2",
    hints: [
      "Consider the importance of blood clot formation in post-extraction healing.",
      "Think about how rinsing can affect the clot.",
      "What is the appropriate advice for managing post-operative bleeding?"
    ],
    explanation: `Correct Answer: Option 2. Reiterate the instructions to avoid vigorous rinsing and advise applying gentle pressure with a gauze pack.\nRationale: Vigorous rinsing can dislodge the blood clot that is essential for proper healing after a tooth extraction, potentially leading to prolonged bleeding and a dry socket. The correct advice is to reiterate the instruction to avoid vigorous rinsing and recommend applying gentle pressure to the extraction site with a gauze pack for a specified duration.\nWhy other options are incorrect:\nOption 1: Vigorous rinsing will likely worsen the bleeding.\nOption 3: While some bleeding is normal, persistent bleeding should be addressed with appropriate measures.\nOption 4: Unless the bleeding is excessive and uncontrollable, trying simple measures like pressure application first is usually sufficient.`
  },
]

export default scenarios;
