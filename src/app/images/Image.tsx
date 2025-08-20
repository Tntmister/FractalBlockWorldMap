import { useState } from 'react';

interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	fallbackSrc: string;
}

export default function Image({ src, fallbackSrc, ...props }: ImageProps) {
	const [errored, setErrored] = useState(false);

	function onError() {
		if (!errored) {
			setErrored(true);
		}
	}

	return <img src={errored ? fallbackSrc : src} onError={onError} {...props} />;
}
