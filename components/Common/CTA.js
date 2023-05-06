import React from 'react';
import Link from 'next/link';

const CTA = () => {
  return (
		<>
			<div className="cta-area ptb-100">
        <div className="container">
          <div className="cta-content">
            <span>QUELLE EST LA PROCHAINE ÉTAPE ?</span>
            <h3>Êtes-vous prêt à tester Onirix ?</h3>
          </div>
          <div className="cta-btn-box">
            <Link href="/dreams-prediction" className="default-btn">
              Essayer Onirix
            </Link>
          </div>
        </div>
      </div>
		</>
  );
}

export default CTA;