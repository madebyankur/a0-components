export const componentCode = {
  "code": "\"use client\";\n\nimport { useState } from \"react\";\nimport { useForm } from \"react-hook-form\";\nimport { z } from \"zod\";\n\nimport { Button } from \"@/components/ui/button\";\nimport {\n  Card,\n  CardContent,\n  CardDescription,\n  CardFooter,\n  CardHeader,\n  CardTitle,\n} from \"@/components/ui/card\";\nimport {\n  Form,\n  FormControl,\n  FormField,\n  FormItem,\n  FormLabel,\n  FormMessage,\n} from \"@/components/ui/form\";\nimport { Input } from \"@/components/ui/input\";\nimport {\n  Select,\n  SelectContent,\n  SelectItem,\n  SelectTrigger,\n  SelectValue,\n} from \"@/components/ui/select\";\nimport { zodResolver } from \"@hookform/resolvers/zod\";\n\ninterface KeyValueMap {\n  [key: string]: any;\n}\n\nfunction Spinner() {\n  return (\n    <svg\n      xmlns=\"http://www.w3.org/2000/svg\"\n      width=\"17\"\n      height=\"17\"\n      viewBox=\"0 0 24 24\"\n      fill=\"none\"\n      stroke=\"currentColor\"\n      strokeWidth=\"2\"\n      strokeLinecap=\"round\"\n      strokeLinejoin=\"round\"\n      className=\"mr-2 animate-spin\"\n    >\n      <path d=\"M21 12a9 9 0 1 1-6.219-8.56\"></path>\n    </svg>\n  );\n}\n\nexport default function UserMetadataForm({\n  schema,\n  defaultValues,\n  onSave,\n}: {\n  schema: any;\n  defaultValues: KeyValueMap;\n  onSave?: (values: KeyValueMap) => Promise<void>;\n}) {\n  const [working, setWorking] = useState<boolean>(false);\n  const form = useForm<z.infer<typeof schema>>({\n    resolver: zodResolver(schema),\n    defaultValues,\n  });\n\n  async function onSubmit(values: z.infer<typeof schema>) {\n    setWorking(true);\n\n    if (typeof onSave === \"function\") {\n      await onSave(values);\n    }\n\n    setWorking(false);\n  }\n\n  return (\n    <Card className=\"w-full\">\n      <CardHeader>\n        <CardTitle className=\"text-lg font-normal\">Preferences</CardTitle>\n        <CardDescription></CardDescription>\n      </CardHeader>\n      <Form {...form}>\n        <form onSubmit={form.handleSubmit(onSubmit)} className=\"space-y-8\">\n          <CardContent>\n            <div className=\"grid grid-cols-2 gap-4\">\n              {Object.keys(schema.shape).map((key: any) => {\n                // @ts-ignore\n                const type = schema.shape[key]._def;\n                const formLabel = (\n                  <FormLabel className=\"capitalize\">\n                    {key.replace(\"_\", \" \")}\n                  </FormLabel>\n                );\n\n                if (type.typeName === \"ZodEnum\") {\n                  return (\n                    <FormField\n                      key={key}\n                      control={form.control}\n                      name={key}\n                      render={({ field }) => (\n                        <FormItem>\n                          {formLabel}\n                          <Select\n                            onValueChange={field.onChange}\n                            defaultValue={field.value}\n                          >\n                            <FormControl>\n                              <SelectTrigger>\n                                <SelectValue />\n                              </SelectTrigger>\n                            </FormControl>\n                            <SelectContent>\n                              {type.values.map((value: any) => (\n                                <SelectItem key={value} value={value}>\n                                  {value}\n                                </SelectItem>\n                              ))}\n                            </SelectContent>\n                          </Select>\n                          <FormMessage />\n                        </FormItem>\n                      )}\n                    />\n                  );\n                }\n\n                return (\n                  <FormField\n                    key={key}\n                    control={form.control}\n                    name={key}\n                    render={({ field }) => (\n                      <FormItem>\n                        {formLabel}\n                        <FormControl>\n                          <Input {...field} />\n                        </FormControl>\n                        <FormMessage />\n                      </FormItem>\n                    )}\n                  />\n                );\n              })}\n            </div>\n          </CardContent>\n          <CardFooter>\n            <Button\n              type=\"submit\"\n              disabled={working}\n              className=\"disabled:opacity-50 ml-auto\"\n            >\n              {working && <Spinner />}\n              Save Preferences\n            </Button>\n          </CardFooter>\n        </form>\n      </Form>\n    </Card>\n  );\n}\n"
};