import Link from 'next/link';

export default function Disclaimer() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/start-here">Start Here</Link> |{' '}
        <Link href="/pick-your-problem">Pick Your Legal Problem</Link> |{' '}
        <Link href="/faq">FAQ</Link>
      </nav>

      <h1>Legal Disclaimer</h1>

      <div className="highlight">
        <h2>Important Notice</h2>
        <p>
          <strong>This workbook is for educational purposes only and does not constitute 
          legal advice.</strong>
        </p>
      </div>

      <div className="card">
        <h3>Not a Substitute for Legal Counsel</h3>
        <p>
          The information provided in this workbook is general in nature and may not 
          apply to your specific situation. While we strive to provide accurate and 
          up-to-date information, laws change frequently, and each case has unique 
          circumstances.
        </p>
        <p>
          <strong>We strongly recommend consulting with a licensed Louisiana attorney</strong> 
          for advice tailored to your specific situation, especially for:
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
          <li>Complex custody disputes</li>
          <li>High-conflict situations</li>
          <li>Cases involving domestic violence</li>
          <li>Substantial assets or debts</li>
          <li>Cases involving abuse or neglect allegations</li>
        </ul>
      </div>

      <div className="card">
        <h3>No Attorney-Client Relationship</h3>
        <p>
          Using this workbook does not create an attorney-client relationship between 
          you and FileItYourself or any of its creators. We are not your lawyers, and 
          you should not rely on this information as legal advice specific to your case.
        </p>
      </div>

      <div className="card">
        <h3>Accuracy and Updates</h3>
        <p>
          While we make every effort to ensure the information is accurate and current, 
          we cannot guarantee that all information is up-to-date or applicable to your 
          jurisdiction. Louisiana law changes regularly through legislation and court 
          decisions.
        </p>
      </div>

      <div className="card">
        <h3>Your Responsibility</h3>
        <p>
          If you choose to represent yourself:
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
          <li>You are responsible for understanding and following all court rules</li>
          <li>The court will hold you to the same standards as a licensed attorney</li>
          <li>You must verify all information with current Louisiana law</li>
          <li>You should confirm requirements with your local clerk of court</li>
        </ul>
      </div>

      <div className="card">
        <h3>Limitation of Liability</h3>
        <p>
          FileItYourself and its creators are not responsible for any outcomes in your 
          case. We are not liable for any damages, losses, or adverse results that may 
          occur from using this workbook or following its guidance.
        </p>
      </div>

      <div className="card">
        <h3>Louisiana-Specific Information</h3>
        <p>
          This workbook is designed specifically for Louisiana courts and procedures. 
          Do not use this information if your case is in another state, as laws and 
          procedures vary significantly.
        </p>
      </div>

      <div className="card">
        <h3>When to Hire an Attorney</h3>
        <p>
          Consider hiring a lawyer if:
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
          <li>The other party has an attorney</li>
          <li>Your case involves complex legal issues</li>
          <li>You don't understand the court procedures</li>
          <li>You're facing serious allegations</li>
          <li>Significant money or property is at stake</li>
          <li>You feel overwhelmed by the process</li>
        </ul>
      </div>

      <div className="highlight" style={{ marginTop: '32px' }}>
        <h3>Finding Legal Help</h3>
        <p>
          If you need legal assistance, contact:
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
          <li>Louisiana State Bar Association Lawyer Referral Service: 
            <a href="tel:1-800-421-5722"> 1-800-421-5722</a>
          </li>
          <li>Legal Aid organizations in your parish</li>
          <li>Local law school legal clinics</li>
        </ul>
      </div>

      <div style={{ marginTop: '32px', padding: '16px', background: '#f8d7da', 
                     border: '1px solid #f5c6cb', borderRadius: '4px' }}>
        <p style={{ margin: 0, color: '#721c24' }}>
          <strong>By using this workbook, you acknowledge that you have read and 
          understood this disclaimer and agree to its terms.</strong>
        </p>
      </div>
    </main>
  );
}
