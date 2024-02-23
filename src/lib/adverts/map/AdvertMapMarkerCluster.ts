import { Cluster, MarkerClusterer } from '@googlemaps/markerclusterer';

const content = (count: number) => {
	const div = document.createElement('div');
	div.textContent = `${count}`;
	div.className =
		'bg-neutral-800 text-neutral-100 text-lg font-semibold leading-[1.143em] px-2.5 py-1.5 rounded-full';

	return div;
};

const render = (cluster: Cluster) =>
	new google.maps.marker.AdvancedMarkerElement({
		content: content(cluster.count),
		position: cluster.position,
		zIndex: Number(google.maps.Marker.MAX_ZINDEX) + cluster.count
	});

const renderer = { render };

const onClusterClick = (
	event: google.maps.MapMouseEvent,
	cluster: Cluster,
	map: google.maps.Map
) => {
	if (undefined === cluster.bounds) return;
	map.fitBounds(cluster.bounds);

	const zoom = map.getZoom();
	if (undefined === zoom) return;
	map.setZoom(zoom - 1);
};

export const AdvertMapMarkerCluster = {
	new: () =>
		new MarkerClusterer({
			renderer,
			onClusterClick
		})
};
