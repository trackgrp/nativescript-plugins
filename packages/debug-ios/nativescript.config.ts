import { NativeScriptConfig } from '@nativescript/core';

export default {
	ios: {
		SPMPackages: [
			{
				name: 'DebugSwift',
				libs: ['DebugSwift'],
				version: '1.14.0',
				repositoryURL: 'https://github.com/DebugSwift/DebugSwift.git',
			},
		],
	},
} as NativeScriptConfig;
