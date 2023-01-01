/* eslint-disable import/extensions,@typescript-eslint/no-unsafe-assignment,@typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-member-access,@typescript-eslint/prefer-ts-expect-error,@typescript-eslint/ban-ts-comment */

// @ts-ignore
import { dotnet } from './build/dotnet.js'

const { getAssemblyExports, getConfig } = await dotnet
      .withDiagnosticTracing(false)
      .create();
const config = getConfig();
const exports = await getAssemblyExports(config.mainAssemblyName);

export const greeting: (a: number, b:number, c:string, d:boolean) => string = exports.MyClass.Greeting;