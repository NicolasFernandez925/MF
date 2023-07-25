import { Button } from '@/library/components';
import { Fragment } from 'react';

export const DailyConsumption = ({
  handleOpen,
}: {
  handleOpen: () => void;
}) => {
  return (
    <Fragment>
      <div className="packs-card__data-volume">
        <p className="packs-card__data-volume__title body-2-bold">
          Volumen de datos
        </p>
        <span className="packs-card__data-volume__value body-3">0.00 MB</span>
      </div>
      <div className="packs-card__last-reset">
        <p className="packs-card__last-reset--title body-2-bold">
          Último reseto
        </p>
        <span className="packs-card__last-reset--value body-3">
          17/01/2023 00:32:00
        </span>
      </div>
      <Button
        onClick={handleOpen}
        text="Promo Plus"
        variant="secondary"
        style={{ width: '100%', marginTop: '10px' }}
      />
    </Fragment>
  );
};
