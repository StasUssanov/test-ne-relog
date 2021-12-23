import React from 'react';
import { usePresenter } from './use-presenter';
import './styles.scss';
import { Card, Space, Typography } from 'antd';
import { MapContainer, TileLayer, Marker, Tooltip } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';

const CardMap = (): JSX.Element => {
  const pr = usePresenter();

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ eventHandlers ~~~ */

  const eventHandlers = (key: number) => {
    return ({
      click: () => {
        console.log('deb marker clicked', key);
      }
    });
  };

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ markersRender ~~~ */

  const markersRender = () => pr.markersSource.map((item) => (
    <Marker
      key={`card-map-marker-key${item.id}`}
      position={[item.position.lat, item.position.long]}
      eventHandlers={eventHandlers(item.id)}
    >
      <Tooltip>
        <Space direction="vertical">
          <Typography.Title
            level={5}
            children={item.name}
          />
          <Typography.Text
            type="secondary"
            children={`ID: ${item.id}`}
          />
          <Typography.Text
            children={`Цена: ${item.price}`}
          />
        </Space>
      </Tooltip>
    </Marker>
  ));

  /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ return ~~~ */

  return (
    <Card className="card-map">
      <MapContainer
        center={[43.238949, 76.889709]}
        zoom={13}
        minZoom={5}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <MarkerClusterGroup>
          {markersRender()}
        </MarkerClusterGroup>
      </MapContainer>
    </Card>
  );
};

export default CardMap;
