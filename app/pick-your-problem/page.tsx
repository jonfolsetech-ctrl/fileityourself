import Link from 'next/link';

export default function PickYourProblem() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/start-here">Start Here</Link> |{' '}
        <Link href="/faq">FAQ</Link> |{' '}
        <Link href="/disclaimer">Legal Disclaimer</Link>
      </nav>

      <h1>Pick Your Legal Problem</h1>
      <p>
        Select the issue you're dealing with to get specific guidance and templates 
        for your situation. Each section provides detailed information and step-by-step 
        instructions.
      </p>

      <div className="card">
        <h2>Child Custody Issues</h2>
        <p>
          Modify existing custody arrangements, establish new custody orders, or 
          address custody disputes.
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Motion to Modify Custody</li>
          <li>Motion for Primary Custody</li>
          <li>Motion to Establish Custody</li>
          <li>Emergency Custody Motions</li>
        </ul>
      </div>

      <div className="card">
        <h2>Child Support</h2>
        <p>
          Request changes to child support payments based on changed circumstances.
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Motion to Increase Child Support</li>
          <li>Motion to Decrease Child Support</li>
          <li>Motion to Establish Child Support</li>
          <li>Motion for Retroactive Support</li>
        </ul>
      </div>

      <div className="card">
        <h2>Visitation Rights</h2>
        <p>
          Establish, modify, or enforce visitation schedules with your children.
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Motion to Establish Visitation</li>
          <li>Motion to Modify Visitation Schedule</li>
          <li>Motion for Supervised Visitation</li>
          <li>Motion to Enforce Visitation</li>
        </ul>
      </div>

      <div className="card">
        <h2>Contempt of Court</h2>
        <p>
          Take action when the other party violates a court order.
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Motion for Contempt (Non-payment of Support)</li>
          <li>Motion for Contempt (Violation of Custody Order)</li>
          <li>Motion to Enforce Court Orders</li>
        </ul>
      </div>

      <div className="card">
        <h2>Divorce Motions</h2>
        <p>
          Handle various aspects of divorce proceedings.
        </p>
        <ul style={{ marginLeft: '20px' }}>
          <li>Motion for Temporary Relief</li>
          <li>Motion for Final Decree</li>
          <li>Motion to Divide Property</li>
          <li>Motion for Spousal Support</li>
        </ul>
      </div>

      <div className="highlight" style={{ marginTop: '32px' }}>
        <h3>Get Detailed Templates & Instructions</h3>
        <p>
          Our workbook includes specific templates for each type of motion, complete 
          with Louisiana-specific requirements and filing instructions.
        </p>
        <Link href="/pricing" className="button">
          Access Full Workbook
        </Link>
      </div>
    </main>
  );
}
