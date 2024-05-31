import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { DocsLayout } from "@/components/www/layouts";
import PageLayout from "@/components/www/page-layout";

export default function Docs() {
  return (
    <DocsLayout>
      <PageLayout
        title="Introduction"
        description="UI components provide a solid foundation for developing robust and user-friendly identity-related features in applications."
        experimental={false}
      >
        <Alert variant="warning" className="mb-5">
          <AlertCircle className="h-4 w-4 mt-1" />
          <AlertTitle className="mb-3 mt-1">Important</AlertTitle>
          <AlertDescription className="text-md">
            The UI components are an experimental{" "}
            <a
              href="https://lab.auth0.com/"
              target="_blank"
              className="text-blue-700 hover:underline"
              rel="noopener noreferrer"
            >
              Auth0Lab
            </a>{" "}
            library. They might not remain available or be incorporated into the
            Auth0 platform. Use of these components is without support and all
            questions should be directed to the open source{" "}
            <a
              href="https://github.com/auth0-lab/a0-components"
              target="_blank"
              className="text-blue-700 hover:underline"
              rel="noopener noreferrer"
            >
              repository
            </a>{" "}
            or the{" "}
            <a
              href="https://discord.gg/QGHxwDsbQQ"
              target="_blank"
              className="text-blue-700 hover:underline"
              rel="noopener noreferrer"
            >
              Auth0Lab discord
            </a>
            .
          </AlertDescription>
        </Alert>
        <div>
          <p className="mb-3 leading-7">
            Our goal is to deliver reusable UI components that help customers
            build high-quality interfaces efficiently. These self-contained
            pieces of code can be easily integrated into existing projects,
            allowing for customization and extension as needed.
          </p>
          <div>
            <ul className="list-disc ml-4">
              <li className="leading-7">
                <strong>Code ownership</strong>: Take ownership of the UI
                components code, just like you would with any other code in
                their project.
              </li>
              <li className="leading-7">
                <strong>Customization</strong>: Modify the pre-built components
                to fit your specific needs and branding. This might involve
                changing colors, fonts, or layouts, or adding custom
                functionality.
              </li>
              <li className="leading-7">
                <strong>Integration</strong>: Integrage the UI components into
                your existing codebase.
              </li>
              <li className="leading-7">
                <strong>Version control</strong>: Manage the UI components code
                alongside your codebase.
              </li>
            </ul>
          </div>

          <h2
            className="mb-3 font-heading mt-12 scroll-m-20 border-b pb-2 text-2xl font-semibold tracking-tight"
            id="notes"
          >
            <a
              className="font-medium underline underline-offset-4 subheading-anchor"
              aria-label="Link to section"
              href="#notes"
            >
              <span className="icon icon-link"></span>
            </a>
            Notes
          </h2>
          <div className="mt-8">
            The UI components were designed specifically for use with{" "}
            <a
              href="https://react.dev"
              target="_blank"
              className="text-blue-700 hover:underline"
              rel="noopener noreferrer"
            >
              React
            </a>{" "}
            applications. They are built on top of{" "}
            <a
              href="https://ui.shadcn.com/docs"
              target="_blank"
              className="text-blue-700 hover:underline"
              rel="noopener noreferrer"
            >
              Shadcn
            </a>
            , a powerful collection that provides re-usable components you can
            easily integrate into your apps. Our UI components follow the same
            philosophy: simply copy and paste them to customize them for your
            specific app.
          </div>
        </div>
      </PageLayout>
    </DocsLayout>
  );
}
