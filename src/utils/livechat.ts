interface CustomWindow extends Window {
	attachEvent: any;
	intercomSettings: any;
}

declare var window: CustomWindow;

export const livechat = (): void => {
	const APP_ID = process.env.REACT_APP_INTERCOM_ID;
	window.intercomSettings = {
		app_id: process.env.REACT_APP_INTERCOM_ID,
	};

	(function () {
		const w = window;
		const ic = w.Intercom;

		if (typeof ic === 'function') {
			ic('reattach_activator');
			ic('update', w.intercomSettings);
		} else {
			const d = document;
			const i: any = function () {
				i.c(arguments);
			};

			i.q = [];
			i.c = function (args: any) {
				i.q.push(args);
			};
			w.Intercom = i;

			const l = function () {
				const s = d.createElement('script');
				s.type = 'text/javascript';
				s.async = true;
				s.src = 'https://widget.intercom.io/widget/' + APP_ID;
				const x = d.getElementsByTagName('script')[0];
				x.parentNode!.insertBefore(s, x);
			};

			if (document.readyState === 'complete') {
				l();
			} else if (w.attachEvent) {
				w.attachEvent('onload', l);
			} else {
				w.addEventListener('load', l, false);
			}
		}
	})();
};
