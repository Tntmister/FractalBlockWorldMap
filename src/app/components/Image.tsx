import { useState } from "react";

interface Props extends React.ImgHTMLAttributes<HTMLImageElement> {
	src: string;
	fallbackSrc?: string;
}

export default function Image({ src, fallbackSrc, ...props }: Props) {
	const [errored, setErrored] = useState(false);

	function onError() {
		if (!errored) {
			setErrored(true);
		}
	}

	return <img src={errored && fallbackSrc ? fallbackSrc : src} onError={onError} {...props} />;
}
