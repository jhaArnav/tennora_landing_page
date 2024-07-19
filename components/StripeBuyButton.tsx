import React, { useEffect } from 'react';

const StripeBuyButton: React.FC = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://js.stripe.com/v3/buy-button.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <stripe-buy-button
      buy-button-id="buy_btn_1PeBWKKzRpzeixCAelaTZ2XK"
      publishable-key="pk_live_51Pe9R6KzRpzeixCABUxpyl2KlJDS9r9sVs4hrs1xW0C4Xs9w0ggbAa6QfZeKOAP85qSDBqbh9AAfrJWxD8ezAkem008vpnu4Kf"
    ></stripe-buy-button>
  );
};

export default StripeBuyButton;
