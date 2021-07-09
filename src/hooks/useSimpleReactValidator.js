import { useMemo, useReducer } from 'react';
import SimpleReactValidator from 'simple-react-validator';
import '../utils/locale/es.js'

export default function useSimpleReactValidator(passInOptions = {}) {
    const [{ options }, forceUpdate] = useReducer(({ options }) => ({ options }), {
        options: {
            ...passInOptions,
            className: 'alert alert-danger',
            locale: 'es',
        }
    });

    const simpleValidator = useMemo(
        () =>
            new SimpleReactValidator(
                options.autoForceUpdate
                    ? {
                        ...options,
                        autoForceUpdate: {
                            forceUpdate,
                        },
                    }
                    : options
            ),
        [options]
    );
    return [simpleValidator, forceUpdate];
}