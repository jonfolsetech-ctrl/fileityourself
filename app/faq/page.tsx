import Link from 'next/link';

export default function FAQ() {
  return (
    <main>
      <nav>
        <Link href="/">Home</Link> |{' '}
        <Link href="/start-here">Start Here</Link> |{' '}
        <Link href="/pick-your-problem">Pick Your Legal Problem</Link> |{' '}
        <Link href="/disclaimer">Legal Disclaimer</Link>
      </nav>

      <h1>Frequently Asked Questions</h1>

      <div className="card">
        <h3>Do I need a lawyer to file a motion?</h3>
        <p>
          No, you have the right to represent yourself (called "pro se" representation). 
          However, the court will hold you to the same standards as an attorney. Our 
          workbook helps you understand these requirements and prepare proper documents.
        </p>
      </div>

      <div className="card">
        <h3>How much does it cost to file a motion?</h3>
        <p>
          Filing fees vary by parish in Louisiana, typically ranging from $100-$300. 
          Some parishes may waive fees if you can't afford them. Contact your local 
          clerk of court for specific fee information.
        </p>
      </div>

      <div className="card">
        <h3>How long does the process take?</h3>
        <p>
          The timeline varies depending on the type of motion and court calendar. 
          Emergency motions may be heard within days, while routine motions typically 
          take 30-90 days. Your motion must be served on the other party, who then 
          has time to respond.
        </p>
      </div>

      <div className="card">
        <h3>What happens after I file my motion?</h3>
        <p>
          After filing:
        </p>
        <ol style={{ marginLeft: '20px', marginTop: '8px' }}>
          <li>The clerk will stamp your motion and give you a hearing date</li>
          <li>You must serve a copy on the other party</li>
          <li>The other party can file a response</li>
          <li>You'll attend a hearing before a judge</li>
          <li>The judge will make a ruling</li>
        </ol>
      </div>

      <div className="card">
        <h3>Can I modify a motion after filing?</h3>
        <p>
          Yes, you can file an amended motion before the hearing. However, you must 
          serve the amended version on the other party and it may affect your hearing 
          date.
        </p>
      </div>

      <div className="card">
        <h3>What if the other party doesn't respond?</h3>
        <p>
          If the other party doesn't file a response or appear at the hearing, you 
          may be able to proceed by default. However, you must prove you properly 
          served them with notice of the motion and hearing.
        </p>
      </div>

      <div className="card">
        <h3>Do I need to serve the motion myself?</h3>
        <p>
          No, you cannot serve the motion yourself. Service must be done by:
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
          <li>Sheriff's office (most common)</li>
          <li>Private process server</li>
          <li>Certified mail (in some cases)</li>
          <li>Another adult not involved in the case</li>
        </ul>
      </div>

      <div className="card">
        <h3>What should I bring to the hearing?</h3>
        <p>
          Bring all relevant documents, evidence, and witnesses to support your motion. 
          This may include:
        </p>
        <ul style={{ marginLeft: '20px', marginTop: '8px' }}>
          <li>Your filed motion and any responses</li>
          <li>Financial documents (pay stubs, tax returns)</li>
          <li>Medical records (if relevant)</li>
          <li>Photos or other evidence</li>
          <li>Witness testimony</li>
        </ul>
      </div>

      <div className="card">
        <h3>Can I appeal if the judge denies my motion?</h3>
        <p>
          Yes, you generally have 30 days to file an appeal. However, appeals are 
          complex and often require legal representation. Consider consulting with 
          an attorney before filing an appeal.
        </p>
      </div>

      <div className="highlight" style={{ marginTop: '32px' }}>
        <h3>Still Have Questions?</h3>
        <p>
          Our comprehensive workbook provides detailed answers and guidance for 
          Louisiana-specific procedures.
        </p>
        <Link href="/pricing" className="button">
          Get Full Access
        </Link>
      </div>
    </main>
  );
}
