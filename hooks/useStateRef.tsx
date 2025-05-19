import {RefObject, useEffect, useRef, useState} from "react";

export function getRefValue<C>(ref:RefObject<C>) {
	return ref.current as C
}

export function useStateRef<T>(
	initialValue: T
): [T, (value: T) => void, RefObject<T>] {
	const [state, setState] = useState<T>(initialValue);
	const ref = useRef<T>(state);

	useEffect(() => {
		ref.current = state;
	}, [state]);

	return [state, setState, ref];
}