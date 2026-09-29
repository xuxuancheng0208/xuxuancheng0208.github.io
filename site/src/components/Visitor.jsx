import { useEffect, useRef } from 'react';

export default function Visitor() {
  const mapRef = useRef(null);

  useEffect(() => {
    const container = mapRef.current;
    let timer;
    let previousWidth = 0;
    const renderMap = () => {
      const width = Math.round(container.getBoundingClientRect().width);
      if (!width || width === previousWidth) return;
      previousWidth = width;
      container.replaceChildren();
      const script = document.createElement('script');
      script.id = 'mapmyvisitors';
      script.async = true;
      script.src = `https://mapmyvisitors.com/map.js?cl=eee&w=${width}&t=tt&d=nWExEtVKzFVvCoGZIQ15ykZ9WqpqYP7fLQwQtmcOvr0&co=ffffff&cmo=ffbed2&cmn=f42e7a&ct=acacac`;
      container.appendChild(script);
    };
    const observer = new ResizeObserver(() => {
      clearTimeout(timer);
      timer = setTimeout(renderMap, 200);
    });
    observer.observe(container);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
      container.replaceChildren();
    };
  }, []);

  return <section id="visitors" className="visitors-section" aria-labelledby="visitors-heading">
    <div id="visitors-heading" className="card-title">Visitors</div>
    <div ref={mapRef} className="visitor-map-container" aria-label="Visitor map" />
  </section>;
}
