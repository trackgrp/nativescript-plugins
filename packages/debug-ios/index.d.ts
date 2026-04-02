export declare class NativeScriptDebugIOS {
	/**
	 * Shows the DebugSwift view. You can call this method from anywhere in your app, and it will be displayed on top of all other views.
	 */
	static show(): void;

	/**
	 * Toggles the DebugSwift view. This could be used to hook up a Shake to Toggle feature in your app, allowing you to show or hide the debug view with a shake gesture.
	 */
	static toggle(): void;
}
