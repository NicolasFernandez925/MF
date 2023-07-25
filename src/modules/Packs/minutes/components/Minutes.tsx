import { CSSProperties, Fragment } from 'react';
import Icon from '@mdi/react';
import { mdiCloseCircleOutline, mdiCheckCircleOutline } from '@mdi/js';
import {
  ContainerEmpty,
  Header,
  Spinner,
  Table,
  Tooltip,
} from '@/library/components';

const data: any[] = [
  {
    Pack: 'R10G6M-',
    Descripción: 'Pack 10 GB Internet x 30 días x 6 meses de regalo',
    Otorgado: '17 GB',
    Disponible: '3 GB',
    Vencimiento: '05/02/2023 23:59:00',
    'Renov.': true,
    'P. Plus': false,
    id: crypto.randomUUID(),
  },
  {
    Pack: 'R50G6M',
    Descripción: '3 GB Internet Masivo CR',
    Otorgado: '1 GB',
    Disponible: '2.2192 GB',
    Vencimiento: '06/01/1998 23:59:00',
    'Renov.': false,
    'P. Plus': true,
    id: crypto.randomUUID(),
  },
  {
    Pack: 'R10G6M',
    Descripción: 'Pack Promo Plus de Datos',
    Otorgado: '2 GB',
    Disponible: '12.3467 GB',
    Vencimiento: '05/02/2023 23:59:00',
    'Renov.': false,
    'P. Plus': true,
    id: crypto.randomUUID(),
  },
];

export const Minutes = () => {
  const classHeaderGrid: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '0.8fr 3fr 0.6fr 0.8fr 1.2fr 0.5fr 0.5fr',
  };

  const classRowGrid: CSSProperties = {
    display: 'grid',
    gridTemplateColumns: '0.8fr 3fr 0.6fr 0.8fr 1.2fr 0.5fr 0.5fr',
  };

  const headers: Header<any>[] = [
    {
      value: 'Pack',
      label: 'Pack',
      valueGetter: (row) => {
        return (
          <>
            {row.Pack === 'R10G6M-' ? (
              <Tooltip
                position="top"
                content="Este es un tooltip"
                classNames={{
                  fontSize: '12px',
                }}
              >
                <p>{row.Pack}</p>
              </Tooltip>
            ) : (
              row.Pack
            )}
          </>
        );
      },
      ariaGetter: (row) => {
        return `Valor del aria label para ejemplo de pack`;
      },
    },
    {
      value: 'Descripción',
      label: 'Descripción',
    },
    {
      value: 'Otorgado',
      label: 'Otorgado',
    },
    {
      value: 'Disponible',
      label: 'Disponible',
    },
    {
      value: 'Vencimiento',
      label: 'Vencimiento',
    },
    {
      value: 'Renov.',
      label: 'Renov.',
      valueGetter: (row) => {
        return (
          <Fragment>
            {row['Renov.'] ? (
              <Icon
                path={mdiCheckCircleOutline}
                size={0.6}
                color={'var(--color-state-base-green)'}
              />
            ) : (
              <Icon
                path={mdiCloseCircleOutline}
                size={0.6}
                color={'var(--color-secondary-institutional-red)'}
              />
            )}
          </Fragment>
        );
      },
    },
    {
      value: 'P. Plus',
      label: 'P. Plus',
      valueGetter: (row) => {
        return (
          <Fragment>
            {row['P. Plus'] ? (
              <Icon
                path={mdiCheckCircleOutline}
                size={0.6}
                color={'var(--color-state-base-green)'}
              />
            ) : (
              <Icon
                path={mdiCloseCircleOutline}
                size={0.6}
                color={'var(--color-secondary-institutional-red)'}
              />
            )}
          </Fragment>
        );
      },
    },
  ];

  return (
    <div className="packs-card">
      <p className="body-2-bold packs-card__title">Minutos</p>
      <Table<any>
        headers={headers}
        bordered
        data={data}
        triggerData={true}
        isLoading={false}
        alternateRowColor
        classHeaderGrid={classHeaderGrid}
        classRowGrid={classRowGrid}
        classCell={{
          padding: '0px 8px',
          justifyContent: 'unset',
        }}
        headerFixed
        componentLoading={<Spinner variant="primary" size="md" />}
        componentWithoutData={
          <ContainerEmpty
            title="Aún no se ha consultado el Historial de Compra de Packs"
            description="Por favor, haga click en “Consultar”."
            styles={{
              boxShadow: 'initial',
              borderRadius: 'initial',
              marginTop: '20px',
            }}
          />
        }
      />
    </div>
  );
};
