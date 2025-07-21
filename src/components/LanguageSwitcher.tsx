"use client";

import { useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function LanguageSwitcher() {
  const [isPending, startTransition] = useTransition();
  const router = useRouter();
  const pathname = usePathname();

  // Extract language from URL like "/en/page" -> "en"
  const currentLocale = pathname.split("/")[1] || "en";

  const locales = [
    { code: "en", name: "English" },
    { code: "ru", name: "Русский" },
    { code: "ro", name: "Română" },
  ];

  const onSelectChange = (nextLocale: string) => {
    startTransition(() => {
      router.replace(`/${nextLocale}`);
    });
  };

  return (
    <div className="mr-3">
      <Select
        defaultValue={currentLocale}
        onValueChange={onSelectChange}
        disabled={isPending}
      >
        <SelectTrigger
          className="h-11 border border-stone-400 bg-stone-200 hover:bg-slate-300 transition duration-700 ease-in-out rounded-full focus:ring-0 focus:ring-offset-0"
          aria-label="Change language"
        >
          <SelectValue>{currentLocale.toUpperCase()}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {locales.map((locale) => (
            <SelectItem key={locale.code} value={locale.code}>
              {locale.name}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
    </div>
  );
}

// ORIGINAL LanguageSwitcher code with no shadcn/ui components and lovely dropdown styling
// "use client";

// import { useTransition } from "react";
// import { useRouter, usePathname } from "next/navigation";

// export default function LanguageSwitcher() {
//   const [isPending, startTransition] = useTransition();
//   const router = useRouter();
//   const pathname = usePathname();

//   // Extract language from URL like "/en/page" -> "en"
//   const currentLocale = pathname.split("/")[1] || "en";

//   const onSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     const nextLocale = e.target.value;
//     startTransition(() => {
//       router.replace(`/${nextLocale}`);
//     });
//   };

//   return (
//     <label className="border-2 border-gray-400 hover:bg-gray-200 rounded-full px-3 mr-3 transition duration-700 ease-in-out">
//       <p className="sr-only">change language</p>
//       <select
//         value={currentLocale}
//         className="bg-transparent appearance-none text-sm font-medium text-center cursor-pointer focus:outline-none"
//         onChange={onSelectChange}
//         disabled={isPending}
//       >
//         <option value="en">ENG</option>
//         <option value="ru">RUS</option>
//         <option value="ro">ROM</option>
//       </select>
//     </label>
//   );
// }