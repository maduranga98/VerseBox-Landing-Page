"use client";

export default function PrivacyPolicy() {
  return (
    <section id="privacy" className="py-20 md:py-32 bg-versebox-surface">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 md:p-12 shadow-lg">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-versebox-text mb-4">
              Inkwings Privacy Policy & Terms of Service
            </h1>
            <p className="text-base text-versebox-text-secondary mb-4">
              A product of <strong>Lumora Ventures (PVT) LTD</strong>
            </p>
            <div className="space-y-1 text-sm text-versebox-text-secondary">
              <p>
                <strong>Last Updated:</strong> November 21, 2025
              </p>
              <p>
                <strong>Effective Date:</strong> November 21, 2025
              </p>
            </div>
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none space-y-8">
            {/* 1. Introduction */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                1. Introduction
              </h2>
              <p className="text-versebox-text-secondary leading-relaxed">
                Welcome to Inkwings ("Platform," "we," "us," or "our"). Inkwings
                provides a platform for users to share, discover, and preserve
                creative writing including poetry, stories, lyrics, quotes, and
                microfiction. This Privacy Policy and Terms of Service
                ("Agreement") governs your access to and use of our services.
              </p>
              <p className="text-versebox-text-secondary leading-relaxed">
                By using Inkwings, you agree to this Agreement. If you do not
                agree, please do not use our Platform.
              </p>
            </section>

            {/* 2. Intellectual Property & Content Ownership */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                2. Intellectual Property & Content Ownership
              </h2>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                2.1 Your Ownership Rights
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                <strong>
                  You retain complete ownership of all content you publish on
                  Inkwings.
                </strong>{" "}
                We make no claim to ownership of your creative works, including
                but not limited to:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1 mb-4">
                <li>Poetry and verse</li>
                <li>Short stories and microfiction</li>
                <li>Song lyrics</li>
                <li>Quotes and excerpts</li>
                <li>Any other creative writing</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                2.2 License Grant to Inkwings
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                By publishing content on Inkwings, you grant us a{" "}
                <strong>non-exclusive, worldwide, royalty-free license</strong>{" "}
                to:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1 mb-4">
                <li>Display your content on the Platform</li>
                <li>Store and backup your content on our servers</li>
                <li>
                  Allow other users to view, share, and interact with your
                  content within the Platform
                </li>
                <li>
                  Use your content for promotional purposes (with attribution)
                  to showcase Platform features
                </li>
              </ul>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                <strong>Important:</strong> This license does not transfer
                ownership and is solely for operating the Platform. You may
                delete your content at any time, which will terminate this
                license.
              </p>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                2.3 Your Representations
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                By publishing content, you represent and warrant that:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>You own or have the legal right to publish the content</li>
                <li>
                  Your content does not infringe on any third party's
                  intellectual property rights
                </li>
                <li>
                  Your content does not violate any applicable laws or
                  regulations
                </li>
                <li>All information you provide is accurate and truthful</li>
              </ul>
            </section>

            {/* 3. Copyright Protection & Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                3. Copyright Protection & Dispute Resolution
              </h2>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                3.1 Copyright Infringement Policy
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Inkwings respects intellectual property rights and expects users
                to do the same. We maintain a{" "}
                <strong>strict copyright protection system</strong>.
              </p>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                3.2 First Publisher Priority
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                In cases of disputed ownership:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>
                  <strong>
                    Priority is given to the user who published first
                  </strong>{" "}
                  on our Platform
                </li>
                <li>
                  The burden of proof lies with the party claiming the content
                  was published without permission
                </li>
                <li>We maintain timestamped records of all publications</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                3.3 Copyright Dispute Process
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                If you believe content infringes your copyright:
              </p>

              <div className="mb-4">
                <p className="font-semibold text-versebox-text mb-2">
                  Step 1: Submit a Report
                </p>
                <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                  <li>Navigate to the content in question</li>
                  <li>Click "Report" and select "Copyright Infringement"</li>
                  <li>
                    Provide detailed evidence of ownership, including:
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Prior publication dates with verifiable proof</li>
                      <li>Original drafts or manuscripts with timestamps</li>
                      <li>
                        Copyright registration certificates (if applicable)
                      </li>
                      <li>Any other documentation proving authorship</li>
                    </ul>
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-versebox-text mb-2">
                  Step 2: Review Process
                </p>
                <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                  <li>
                    We will review all submitted evidence within 7-14 business
                    days
                  </li>
                  <li>Both parties will be notified of the dispute</li>
                  <li>
                    The accused party has 7 days to provide counter-evidence
                  </li>
                </ul>
              </div>

              <div className="mb-4">
                <p className="font-semibold text-versebox-text mb-2">
                  Step 3: Resolution
                </p>
                <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                  <li>
                    If sufficient evidence proves unauthorized use, we will:
                    <ul className="list-circle list-inside ml-6 mt-1">
                      <li>Remove the infringing content</li>
                      <li>Issue a warning to the infringing account</li>
                      <li>
                        For repeat offenders, suspend or terminate the account
                      </li>
                    </ul>
                  </li>
                  <li>
                    If evidence is insufficient, the content remains published
                  </li>
                  <li>
                    <strong>
                      We always stand with the party who provides valid proof of
                      ownership
                    </strong>
                  </li>
                </ul>
              </div>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                3.4 Counter-Notification
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                If you believe your content was wrongly removed:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>
                  Submit a counter-notification with evidence of ownership
                </li>
                <li>We will review and restore content if appropriate</li>
                <li>False claims may result in account penalties</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                3.5 Repeat Infringement
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed">
                Accounts with multiple verified copyright violations will be
                permanently suspended.
              </p>
            </section>

            {/* 4. Platform Role & Liability Limitations */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                4. Platform Role & Liability Limitations
              </h2>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                4.1 Platform as a Neutral Host
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Inkwings serves <strong>only as a platform</strong> for
                showcasing creative content. We:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Do not claim ownership of user content</li>
                <li>Do not endorse or verify the accuracy of user content</li>
                <li>Are not responsible for disputes between users</li>
                <li>
                  Do not guarantee the quality, safety, or legality of user
                  content
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                4.2 No Legal Relationship
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                <strong>
                  We have no legal, financial, or contractual relationship with
                  your creative works.
                </strong>{" "}
                You are solely responsible for:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>The content you publish</li>
                <li>Any legal issues arising from your content</li>
                <li>Disputes with third parties regarding your content</li>
                <li>
                  Obtaining necessary permissions or licenses for your content
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                4.3 Disclaimer of Warranties
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Inkwings is provided "as is" without warranties of any kind. We
                do not guarantee:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Uninterrupted or error-free service</li>
                <li>Complete security or privacy of your content</li>
                <li>Prevention of unauthorized access or data loss</li>
                <li>That the Platform will meet your specific needs</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                4.4 Limitation of Liability
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>
                  We are not liable for any damages arising from your use of the
                  Platform
                </li>
                <li>
                  We are not responsible for content posted by other users
                </li>
                <li>
                  We are not liable for any data loss, though we make reasonable
                  efforts to prevent it
                </li>
                <li>
                  Our total liability shall not exceed the amount you paid to
                  use the Platform (if applicable)
                </li>
              </ul>
            </section>

            {/* 5. Prohibited Content & Conduct */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                5. Prohibited Content & Conduct
              </h2>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                5.1 Content Restrictions
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                You may not publish content that:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Infringes on intellectual property rights</li>
                <li>Contains illegal material</li>
                <li>Promotes violence, hatred, or discrimination</li>
                <li>Contains explicit sexual content involving minors</li>
                <li>Harasses, bullies, or threatens other users</li>
                <li>Contains malware, viruses, or harmful code</li>
                <li>Is spam or misleading information</li>
                <li>Violates any applicable laws or regulations</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                5.2 Prohibited Conduct
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Users must not:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>
                  <strong>
                    Plagiarize or republish content found on Inkwings
                  </strong>{" "}
                  as their own work elsewhere
                </li>
                <li>
                  Create multiple accounts to evade bans or manipulate the
                  Platform
                </li>
                <li>
                  Attempt to hack, scrape, or reverse engineer the Platform
                </li>
                <li>Impersonate other users or public figures</li>
                <li>Engage in harassment or bullying</li>
                <li>Use automated tools to create fake engagement</li>
                <li>Sell or transfer accounts</li>
                <li>Use the Platform for any illegal purposes</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                5.3 Plagiarism & Content Theft
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                <strong>
                  Creating external publications using content from Inkwings
                  without proper permission and attribution is strictly
                  prohibited.
                </strong>{" "}
                This includes:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1 mb-4">
                <li>Copying other users' work and publishing elsewhere</li>
                <li>Using content in commercial projects without permission</li>
                <li>
                  Compiling content into books, websites, or other media without
                  authorization
                </li>
              </ul>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                <strong>Violations will result in:</strong>
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Immediate account suspension</li>
                <li>Potential legal action from content owners</li>
                <li>Permanent ban from the Platform</li>
              </ul>
            </section>

            {/* 6. Account Suspension & Termination */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                6. Account Suspension & Termination
              </h2>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                6.1 Grounds for Suspension
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Your account may be suspended or terminated for:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Copyright infringement</li>
                <li>Harassment or bullying</li>
                <li>Publishing prohibited content</li>
                <li>Violating these Terms of Service</li>
                <li>Engaging in illegal activities</li>
                <li>Multiple community guideline violations</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                6.2 Suspension Process
              </h3>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1 mb-4">
                <li>
                  <strong>First Offense:</strong> Warning and content removal
                </li>
                <li>
                  <strong>Second Offense:</strong> Temporary suspension (7-30
                  days)
                </li>
                <li>
                  <strong>Third Offense:</strong> Permanent account termination
                </li>
              </ul>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                <strong>Severe violations</strong> (illegal content, severe
                harassment) may result in immediate permanent ban.
              </p>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                6.3 Appeals
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                You may appeal a suspension by:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Contacting support with evidence of wrongful suspension</li>
                <li>We will review within 14 business days</li>
                <li>Our decision on appeals is final</li>
              </ul>
            </section>

            {/* 7. Reporting & Content Moderation */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                7. Reporting & Content Moderation
              </h2>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                7.1 Reporting System
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Users can report content or behavior that violates our policies:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Click "Report" on any content</li>
                <li>Select the violation category</li>
                <li>Provide detailed information and evidence</li>
                <li>Submit the report for review</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                7.2 Review Process
              </h3>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Reports are reviewed within 24-72 hours</li>
                <li>Appropriate action is taken based on severity</li>
                <li>
                  Reporters are notified of the outcome (privacy permitting)
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                7.3 Standing with Original Creators
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                <strong>
                  We always prioritize and stand with the original creator
                </strong>{" "}
                when proper evidence is provided. Our commitment is to:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Protect legitimate content creators</li>
                <li>Remove infringing content swiftly</li>
                <li>Take action against bad actors</li>
                <li>Preserve the integrity of creative works</li>
              </ul>
            </section>

            {/* 8. Data Collection & Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                8. Data Collection & Privacy
              </h2>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                8.1 Information We Collect
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                We collect:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>
                  <strong>Account Information:</strong> Email, username, profile
                  details
                </li>
                <li>
                  <strong>Content Data:</strong> Your published creative works
                  and interactions
                </li>
                <li>
                  <strong>Usage Data:</strong> How you use the Platform (views,
                  likes, comments)
                </li>
                <li>
                  <strong>Technical Data:</strong> IP address, device
                  information, browser type
                </li>
                <li>
                  <strong>Communication Data:</strong> Messages sent through the
                  Platform
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                8.2 How We Use Your Information
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Your information is used to:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Provide and improve Platform services</li>
                <li>Authenticate your account and prevent fraud</li>
                <li>Personalize your experience</li>
                <li>Send important notifications (can be disabled)</li>
                <li>Comply with legal obligations</li>
                <li>Resolve disputes and enforce our policies</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                8.3 Data Sharing
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                We <strong>do not sell your personal information</strong>. We
                may share data with:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>
                  <strong>Service Providers:</strong> Firebase, cloud hosting
                  services (under strict confidentiality)
                </li>
                <li>
                  <strong>Legal Authorities:</strong> When required by law or to
                  protect rights and safety
                </li>
                <li>
                  <strong>Business Transfers:</strong> In case of merger,
                  acquisition, or sale of assets
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                8.4 Data Security
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                We implement industry-standard security measures including:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1 mb-4">
                <li>Encrypted data transmission (SSL/TLS)</li>
                <li>Secure Firebase authentication</li>
                <li>Regular security audits</li>
                <li>Access controls and monitoring</li>
              </ul>
              <p className="text-versebox-text-secondary leading-relaxed">
                <strong>However, no system is 100% secure.</strong> You are
                responsible for maintaining the security of your account
                credentials.
              </p>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                8.5 Your Privacy Rights
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                You have the right to:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1 mb-4">
                <li>Access your personal data</li>
                <li>Correct inaccurate information</li>
                <li>Delete your account and data</li>
                <li>Export your content</li>
                <li>Opt-out of non-essential communications</li>
                <li>Restrict certain data processing</li>
              </ul>
              <p className="text-versebox-text-secondary leading-relaxed">
                To exercise these rights, contact us at info@lumoraventures.com
              </p>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                8.6 Data Retention
              </h3>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>
                  <strong>Active Accounts:</strong> Data retained while account
                  is active
                </li>
                <li>
                  <strong>Deleted Accounts:</strong> Most data deleted within 30
                  days
                </li>
                <li>
                  <strong>Legal Compliance:</strong> Some data retained longer
                  for legal/security purposes
                </li>
                <li>
                  <strong>Backups:</strong> May persist in backups for up to 90
                  days
                </li>
              </ul>
            </section>

            {/* 9. Children's Privacy */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                9. Children's Privacy
              </h2>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Inkwings is open to users of all ages, including children. We
                take children's privacy seriously:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1 mb-4">
                <li>
                  We do not knowingly collect more data from children than
                  necessary
                </li>
                <li>Parents can request deletion of their child's account</li>
                <li>We comply with COPPA and similar regulations</li>
                <li>Age-appropriate content moderation is applied</li>
              </ul>
              <p className="text-versebox-text-secondary leading-relaxed">
                If you believe a child's privacy has been violated, contact us
                immediately.
              </p>
            </section>

            {/* 10. International Users */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                10. International Users
              </h2>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Inkwings is operated from Sri Lanka. By using the Platform:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>
                  You consent to data transfer and processing in Sri Lanka
                </li>
                <li>
                  You agree to comply with local laws regarding online content
                </li>
                <li>
                  Different jurisdictions may have different privacy protections
                </li>
              </ul>
            </section>

            {/* 11. Changes to This Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                11. Changes to This Agreement
              </h2>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                We may update this Agreement periodically. When we do:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>We will notify users via email or Platform notification</li>
                <li>The "Last Updated" date will be revised</li>
                <li>Continued use after changes constitutes acceptance</li>
                <li>Major changes will require explicit consent</li>
              </ul>
            </section>

            {/* 12. User Responsibilities */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                12. User Responsibilities
              </h2>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                As an Inkwings user, you agree to:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Respect intellectual property rights</li>
                <li>Engage respectfully with other users</li>
                <li>Report violations when you encounter them</li>
                <li>Keep your account secure</li>
                <li>Provide accurate information</li>
                <li>Use the Platform legally and ethically</li>
                <li>Not attempt to circumvent security measures</li>
              </ul>
            </section>

            {/* 13. Content Backup & Data Loss */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                13. Content Backup & Data Loss
              </h2>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                13.1 Our Efforts
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                We make reasonable efforts to:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Backup content regularly</li>
                <li>Prevent data loss</li>
                <li>Maintain Platform availability</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                13.2 Your Responsibility
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                <strong>
                  You are responsible for maintaining your own backups
                </strong>{" "}
                of important content. We are not liable for:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Data loss due to technical failures</li>
                <li>Accidental deletions</li>
                <li>Security breaches beyond our control</li>
              </ul>
            </section>

            {/* 14. Third-Party Links & Services */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                14. Third-Party Links & Services
              </h2>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Inkwings may contain links to third-party websites or services:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>We are not responsible for their privacy practices</li>
                <li>We do not endorse third-party content</li>
                <li>Your use of third-party services is at your own risk</li>
                <li>
                  Review their privacy policies before sharing information
                </li>
              </ul>
            </section>

            {/* 15. Governing Law & Dispute Resolution */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                15. Governing Law & Dispute Resolution
              </h2>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                15.1 Governing Law
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                This Agreement is governed by the laws of Sri Lanka, without
                regard to conflict of law principles.
              </p>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                15.2 Dispute Resolution
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                In case of disputes:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>
                  <strong>Informal Resolution:</strong> Contact us first to
                  resolve issues
                </li>
                <li>
                  <strong>Mediation:</strong> If informal resolution fails, we
                  prefer mediation
                </li>
                <li>
                  <strong>Arbitration:</strong> Binding arbitration may be
                  required for certain disputes
                </li>
                <li>
                  <strong>Class Action Waiver:</strong> You agree to resolve
                  disputes individually, not as part of a class action
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                15.3 Exceptions
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                The following may be brought in court:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Intellectual property disputes</li>
                <li>Claims seeking injunctive relief</li>
                <li>Small claims court matters</li>
              </ul>
            </section>

            {/* 16. Severability */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                16. Severability
              </h2>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                If any provision of this Agreement is found unenforceable:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>That provision will be modified to be enforceable</li>
                <li>Other provisions remain in full effect</li>
                <li>The Agreement's intent will be maintained</li>
              </ul>
            </section>

            {/* 17. Entire Agreement */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                17. Entire Agreement
              </h2>
              <p className="text-versebox-text-secondary leading-relaxed">
                This Agreement constitutes the entire agreement between you and
                Inkwings regarding use of the Platform and supersedes any prior
                agreements.
              </p>
            </section>

            {/* 18. Contact Information */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                18. Contact Information
              </h2>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                For questions, concerns, or to report violations:
              </p>
              <div className="space-y-2 text-versebox-text-secondary">
                <p>
                  <strong className="text-versebox-text">Email:</strong>{" "}
                  info@lumoraventures.com
                </p>
                <p>
                  <strong className="text-versebox-text">
                    Copyright Issues:
                  </strong>{" "}
                  info@lumoraventures.com
                </p>
                <p>
                  <strong className="text-versebox-text">
                    Privacy Concerns:
                  </strong>{" "}
                  info@lumoraventures.com
                </p>
                <p>
                  <strong className="text-versebox-text">
                    General Inquiries:
                  </strong>{" "}
                  info@lumoraventures.com
                </p>
                <div className="mt-4">
                  <p>
                    <strong className="text-versebox-text">
                      Mailing Address:
                    </strong>
                  </p>
                  <p>Lumora Ventures (PVT) LTD</p>
                  <p>Kurunegala Road</p>
                  <p>Kuliyapitiya</p>
                  <p>North Western Province, Kurunegala</p>
                  <p>Sri Lanka</p>
                </div>
              </div>
            </section>

            {/* 19. Acknowledgment */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                19. Acknowledgment
              </h2>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                By using Inkwings, you acknowledge that:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1 mb-4">
                <li>You have read and understood this Agreement</li>
                <li>You agree to be bound by these terms</li>
                <li>You understand your rights and responsibilities</li>
                <li>You consent to our data practices as described</li>
              </ul>
              <p className="text-versebox-text-secondary leading-relaxed">
                <strong>
                  Your continued use of Inkwings constitutes ongoing agreement
                  to these terms.
                </strong>
              </p>
            </section>

            {/* 20. Additional Terms */}
            <section>
              <h2 className="text-2xl font-bold text-versebox-text mb-4">
                20. Additional Terms
              </h2>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                20.1 Content Preservation
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                We strive to preserve creative works forever, but:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>We may remove content that violates our policies</li>
                <li>We may terminate the Platform with reasonable notice</li>
                <li>
                  In case of Platform closure, we will provide data export
                  options
                </li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                20.2 Feature Changes
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                We reserve the right to:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Add, modify, or remove features</li>
                <li>Change Platform functionality</li>
                <li>Update user interface and experience</li>
                <li>Adjust content policies as needed</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                20.3 Account Inactivity
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                Accounts inactive for 2+ years may be:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Archived with limited visibility</li>
                <li>Deleted after additional notice</li>
                <li>Your content preserved per your settings</li>
              </ul>

              <h3 className="text-xl font-semibold text-versebox-text mb-3">
                20.4 Content Licensing to Third Parties
              </h3>
              <p className="text-versebox-text-secondary leading-relaxed mb-4">
                <strong>
                  You retain all rights to license your content to third
                  parties.
                </strong>{" "}
                Inkwings does not interfere with:
              </p>
              <ul className="list-disc list-inside text-versebox-text-secondary space-y-1">
                <li>Your ability to publish elsewhere</li>
                <li>Commercial use of your work</li>
                <li>Licensing agreements you enter into</li>
                <li>Your creative freedom beyond the Platform</li>
              </ul>
            </section>

            {/* Closing Statement */}
            <section className="text-center py-8 border-t-2 border-versebox-surface">
              <p className="text-lg text-versebox-text font-semibold mb-4">
                Thank you for being part of the Inkwings community. Together,
                we're preserving creative expression for generations to come.
              </p>
              <p className="text-sm text-versebox-text-secondary italic">
                This document is a legally binding agreement. We recommend
                consulting with a legal professional to ensure it meets your
                specific needs and complies with all applicable laws in your
                jurisdiction.
              </p>
            </section>
          </div>
        </div>
      </div>
    </section>
  );
}
