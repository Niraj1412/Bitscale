import Image from "next/image";

const rows = [
  {
    id: 1,
    name: "Mike Braham",
    title: "Growth Lead",
    source: "CSV import",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "Google",
    website: "https://www.example.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "found",
    note: "Verified in 28s",
    confidence: 92,
  },
  {
    id: 2,
    name: "Alex Johnson",
    title: "Sales Ops",
    source: "Chrome plug-in",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "Amazon",
    website: "https://www.sample.com",
    linkedin: "https://www.linkedin.com/jobs/view/289118340",
    status: "found",
    note: "Verified in 41s",
    confidence: 88,
  },
  {
    id: 3,
    name: "Sarah Thompson",
    title: "Partnerships",
    source: "Zapier sync",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "LinkedIn",
    website: "https://www.testsite.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "blocked",
    note: "Rule: seniority < director",
    confidence: 18,
  },
  {
    id: 4,
    name: "David Lee",
    title: "Marketing",
    source: "HubSpot sync",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "Microsoft",
    website: "https://www.demo.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "found",
    note: "Verified in 33s",
    confidence: 74,
  },
  {
    id: 5,
    name: "Emily Carter",
    title: "Partnerships",
    source: "CSV import",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "TED",
    website: "https://www.siteexample.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "found",
    note: "Verified in 26s",
    confidence: 91,
  },
  {
    id: 6,
    name: "James Smith",
    title: "Growth",
    source: "Airtable sync",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "Unilever",
    website: "https://www.webpage.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "found",
    note: "Verified in 37s",
    confidence: 69,
  },
  {
    id: 7,
    name: "Laura White",
    title: "Recruiting",
    source: "Chrome plug-in",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "Apple",
    website: "https://www.mywebsite.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "blocked",
    note: "Rule: location mismatch",
    confidence: 24,
  },
  {
    id: 8,
    name: "Chris Brown",
    title: "Enablement",
    source: "Zapier sync",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "Google",
    website: "https://www.newsite.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "blocked",
    note: "Rule: domain not verified",
    confidence: 12,
  },
  {
    id: 9,
    name: "Jessica Green",
    title: "Ops",
    source: "CSV import",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "Unilever",
    website: "https://www.uniqueurl.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "found",
    note: "Verified in 29s",
    confidence: 84,
  },
  {
    id: 10,
    name: "Daniel Harris",
    title: "Revenue",
    source: "HubSpot sync",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "Microsoft",
    website: "https://www.originalsite.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "found",
    note: "Verified in 30s",
    confidence: 73,
  },
  {
    id: 11,
    name: "Megan Clark",
    title: "Talent",
    source: "Chrome plug-in",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "Apple",
    website: "https://www.freshpage.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "blocked",
    note: "Rule: missing job title",
    confidence: 16,
  },
  {
    id: 12,
    name: "Brian Lewis",
    title: "Partnerships",
    source: "CSV import",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "TED",
    website: "https://www.differentdomain.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "found",
    note: "Verified in 22s",
    confidence: 82,
  },
  {
    id: 13,
    name: "Samantha Hall",
    title: "Sales",
    source: "Airtable sync",
    updatedAt: "Oct 12, 2024",
    updatedTime: "14:08 PM",
    company: "Google",
    website: "https://www.alternativesite.com",
    linkedin: "https://www.linkedin.com/jobs/view/392118394",
    status: "found",
    note: "Verified in 24s",
    confidence: 90,
  },
];

const stats = [
  {
    label: "Total records",
    value: "214",
    detail: "+18 since yesterday",
  },
  {
    label: "Email coverage",
    value: "72%",
    detail: "Confidence above 80%",
  },
  {
    label: "Rules passing",
    value: "64%",
    detail: "3 rules need review",
  },
];

const statusStyles = {
  found: {
    label: "Email Found",
    pill:
      "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-100 shadow-sm shadow-emerald-100/60",
    dot: "bg-emerald-500",
    bar: "bg-emerald-400",
  },
  blocked: {
    label: "Run condition not met",
    pill:
      "bg-amber-50 text-amber-700 ring-1 ring-amber-100 shadow-sm shadow-amber-100/60",
    dot: "bg-amber-400",
    bar: "bg-amber-300",
  },
};

const companyStyles = {
  Google: { bg: "bg-emerald-50", text: "text-emerald-700" },
  Amazon: { bg: "bg-orange-50", text: "text-orange-600" },
  LinkedIn: { bg: "bg-sky-50", text: "text-sky-600" },
  Microsoft: { bg: "bg-lime-50", text: "text-lime-700" },
  TED: { bg: "bg-rose-50", text: "text-rose-600" },
  Unilever: { bg: "bg-blue-50", text: "text-blue-700" },
  Apple: { bg: "bg-slate-100", text: "text-slate-700" },
};

const companyLogos = {
  Google: "/Google.svg",
  Amazon: "/Amazon.svg",
  LinkedIn: "/LinkedIn.svg",
  Microsoft: "/Microsoft.svg",
  TED: "/TED.svg",
  Unilever: "/Uniliver.svg",
  Apple: "/Apple.svg",
};

const filters = [
  { label: "All records", active: true },
  { label: "Email found", active: false },
  { label: "Blocked by rules", active: false },
  { label: "Needs review", active: false },
];

const navTabs = [
  { label: "Bitscale grid only", active: true },
  { label: "User Engagement", active: false },
  { label: "Customer Insights", active: false },
  { label: "Audience Interactions", active: false },
  { label: "Lead Generation", active: false },
];

const topActions = [
  { label: "Kill Run", tone: "danger" },
  { label: "Auto Run", tone: "default" },
  { label: "Auto Dedupe", tone: "default" },
  { label: "Support", tone: "ghost" },
];

const toolbarItems = [
  { label: "Load Data", icon: DatabaseIcon },
  { label: "2000 Rows", icon: RowsIcon },
  { label: "16/20 Columns", icon: ColumnsIcon },
  { label: "Sort by", icon: SortIcon, dropdown: true },
  { label: "Filter", icon: FilterIcon, dropdown: true },
];

const skeletonCount = 3;

const formatUrl = (url) => url.replace(/^https?:\/\//, "");

const initialsFromName = (name) =>
  name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

function StatusCell({
  status,
  note,
  confidence,
  compact = false,
  variant = "detail",
}) {
  const style = statusStyles[status] ?? statusStyles.found;

  if (variant === "table") {
    if (status === "found") {
      return (
        <div className="inline-flex items-center gap-2 rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
          <span className="flex h-4 w-4 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
            <CheckIcon className="h-3 w-3" />
          </span>
          {style.label}
        </div>
      );
    }

    return (
      <span className="text-xs font-semibold italic text-amber-600">
        {style.label}
      </span>
    );
  }

  return (
    <div className={`flex flex-col gap-2 ${compact ? "items-end" : ""}`}>
      <div
        className={`inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-semibold ${style.pill}`}
      >
        <span className={`h-2 w-2 rounded-full ${style.dot}`} />
        {style.label}
      </div>
      <div className="flex flex-wrap items-center gap-2 text-[11px] text-[var(--muted)]">
        <div className="h-1.5 w-20 overflow-hidden rounded-full bg-slate-100">
          <div
            className={`h-full ${style.bar}`}
            style={{ width: `${confidence}%` }}
          />
        </div>
        <span>{note}</span>
      </div>
    </div>
  );
}

function CompanyBadge({ name, compact = false }) {
  const style = companyStyles[name] ?? {
    bg: "bg-slate-100",
    text: "text-slate-600",
  };
  const logoSrc = companyLogos[name];
  const initials = initialsFromName(name);
  return (
    <div className={`flex min-w-0 items-center ${compact ? "gap-2" : "gap-3"}`}>
      <span
        className={`flex items-center justify-center font-semibold ${style.bg} ${style.text} ${
          compact
            ? "h-6 w-6 rounded-md text-[10px]"
            : "h-8 w-8 rounded-lg text-xs"
        }`}
      >
        {logoSrc ? (
          <Image
            src={logoSrc}
            alt={`${name} logo`}
            width={compact ? 16 : 20}
            height={compact ? 16 : 20}
            className="object-contain"
          />
        ) : (
          initials
        )}
      </span>
      <span
        className={`${compact ? "text-sm" : "text-sm font-semibold"} leading-5`}
      >
        {name}
      </span>
    </div>
  );
}

function UserBadge({ name, title, source, compact = false }) {
  const initials = initialsFromName(name);
  return (
    <div className={`flex min-w-0 items-center ${compact ? "gap-2" : "gap-3"}`}>
      <span
        className={`flex items-center justify-center rounded-full bg-[var(--chip)] text-[var(--accent-strong)] ${
          compact
            ? "h-7 w-7 text-[10px]"
            : "h-9 w-9 text-xs font-semibold"
        }`}
      >
        {initials}
      </span>
      <div className="flex min-w-0 flex-col">
        <span
          className={`${compact ? "text-sm" : "text-sm font-semibold"} leading-5`}
        >
          {name}
        </span>
        <span className="text-xs text-[var(--muted)]">
          {title} | {source}
        </span>
      </div>
    </div>
  );
}

function ImportedDataCell({ name }) {
  return (
    <div className="flex min-w-0 items-center">
      <div className="inline-flex min-w-0 max-w-full items-center gap-2 rounded-full bg-slate-100 px-3 py-2 text-sm font-semibold text-slate-700">
        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-white text-slate-500 shadow-sm">
          <UserIcon className="h-3.5 w-3.5" />
        </span>
        <span className="min-w-0 flex-1 truncate">{name}</span>
        <ChevronRightIcon className="h-4 w-4 text-slate-400" />
      </div>
    </div>
  );
}

function LinkCell({ href, label }) {
  return (
    <a
      className="group flex w-full min-w-0 items-center gap-2 text-sm text-slate-600 transition hover:text-[var(--accent-strong)]"
      href={href}
      title={href}
      target="_blank"
      rel="noreferrer"
    >
      <ExternalIcon className="h-4 w-4 shrink-0 text-slate-400 transition group-hover:text-[var(--accent-strong)]" />
      <span className="min-w-0 flex-1 truncate">{label ?? formatUrl(href)}</span>
    </a>
  );
}

function RowActionButton() {
  return (
    <button
      type="button"
      className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-transparent text-[var(--muted)] transition hover:border-[var(--line)] hover:bg-[var(--chip)]"
      aria-label="Open row"
    >
      <ChevronRightIcon className="h-4 w-4" />
    </button>
  );
}

function IconButton({ children, label }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-[var(--line)] bg-[var(--panel)] px-4 py-2 text-sm font-semibold text-[var(--ink)] transition hover:-translate-y-0.5 hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
    >
      {children}
      {label}
    </button>
  );
}

function PrimaryButton({ children, label }) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white shadow-[0_18px_30px_-22px_rgba(31,122,140,0.6)] transition hover:-translate-y-0.5 hover:bg-[var(--accent-strong)]"
    >
      {children}
      {label}
    </button>
  );
}

function TabButton({ label, active }) {
  return (
    <button
      type="button"
      className={`border-b-2 px-2 py-1 text-xs font-semibold transition ${
        active
          ? "border-[var(--accent)] text-[var(--accent-strong)]"
          : "border-transparent text-[var(--muted)] hover:text-[var(--accent-strong)]"
      }`}
    >
      {label}
    </button>
  );
}

function TopActionButton({ label, tone = "default" }) {
  const toneStyles = {
    default:
      "border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]",
    danger: "border-red-200 bg-red-50 text-red-600 hover:border-red-300",
    ghost: "border-transparent text-[var(--muted)] hover:text-[var(--accent-strong)]",
  };

  return (
    <button
      type="button"
      className={`rounded-full border px-3 py-1 text-xs font-semibold transition ${toneStyles[tone]}`}
    >
      {label}
    </button>
  );
}

function ToolbarButton({ icon: Icon, label, dropdown = false, tone = "default" }) {
  const toneStyles = {
    default:
      "border-[var(--line)] bg-white text-[var(--muted)] hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]",
    accent:
      "border-transparent bg-[var(--accent-strong)] text-white hover:bg-[var(--accent)]",
  };

  return (
    <button
      type="button"
      className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs font-semibold transition ${toneStyles[tone]}`}
    >
      {Icon ? <Icon className="h-3.5 w-3.5" /> : null}
      <span>{label}</span>
      {dropdown ? <ChevronDownIcon className="h-3.5 w-3.5" /> : null}
    </button>
  );
}

function HeaderCell({ icon: Icon, label }) {
  return (
    <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.08em] text-[var(--muted)]">
      <Icon className="h-4 w-4 text-[var(--muted)]" />
      {label}
    </span>
  );
}

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--canvas)] text-[var(--ink)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-20 -top-32 h-[380px] w-[380px] rounded-full bg-[var(--accent-soft)] blur-[80px]" />
        <div className="absolute right-[-80px] top-10 h-[320px] w-[320px] rounded-full bg-[var(--accent-warm)] blur-[90px] opacity-70" />
        <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.4),rgba(255,255,255,0))]" />
      </div>

      <main className="relative mx-auto flex w-full max-w-[1640px] flex-col gap-10 px-4 pb-20 pt-12 sm:px-6 lg:px-8">
        <section className="flex flex-col gap-3 rounded-3xl border border-[var(--line)] bg-[var(--panel)]/90 p-4 shadow-[var(--shadow)] backdrop-blur fade-up">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <button
                type="button"
                className="flex items-center gap-2 rounded-full border border-[var(--line)] bg-white px-3 py-1 text-xs font-semibold text-[var(--accent-strong)]"
              >
                <PlusIcon className="h-3.5 w-3.5" />
                Grid
              </button>
              <div className="flex flex-wrap items-center gap-2">
                {navTabs.map((tab) => (
                  <TabButton
                    key={tab.label}
                    label={tab.label}
                    active={tab.active}
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                500/500
              </span>
              <span className="rounded-full border border-[var(--line)] px-3 py-1 text-xs text-[var(--muted)]">
                Free
              </span>
              {topActions.map((action) => (
                <TopActionButton
                  key={action.label}
                  label={action.label}
                  tone={action.tone}
                />
              ))}
            </div>
          </div>
          <div className="flex flex-wrap items-center gap-3 border-t border-[var(--line)] pt-3 text-xs text-[var(--muted)]">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-semibold text-emerald-700">
                Grid running
              </span>
              <div className="h-1.5 w-28 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[10%] rounded-full bg-emerald-400" />
              </div>
              <span className="text-xs font-semibold text-emerald-700">
                10%
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2">
              <span className="inline-flex items-center gap-1 rounded-full border border-[var(--line)] px-3 py-1">
                <ClockIcon className="h-3.5 w-3.5" />
                Updated 2 min ago
              </span>
            </div>
          </div>
        </section>

        <header className="flex flex-col gap-8 fade-up">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div className="max-w-xl">
              <p className="text-xs uppercase tracking-[0.35em] text-[var(--muted)]">
                Bitscale data studio
              </p>
              <h1 className="font-display mt-3 text-3xl font-semibold text-[var(--ink)] md:text-4xl">
                Imported Data Enrichment
              </h1>
              <p className="mt-3 text-sm text-[var(--muted)]">
                Review lead enrichment progress, trigger waterfall checks, and
                capture verified contact emails in a single canvas.
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <PrimaryButton label="New automation">
                <SparkIcon className="h-4 w-4" />
              </PrimaryButton>
              <IconButton label="Sync now">
                <RefreshIcon className="h-4 w-4" />
              </IconButton>
            </div>
          </div>

          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="flex flex-col gap-2 rounded-2xl border border-[var(--line)] bg-[var(--panel)] p-4 shadow-[var(--shadow)] fade-up"
                style={{ animationDelay: `${index * 0.08 + 0.1}s` }}
              >
                <span className="text-xs uppercase tracking-[0.2em] text-[var(--muted)]">
                  {stat.label}
                </span>
                <span className="font-display text-2xl font-semibold">
                  {stat.value}
                </span>
                <span className="text-xs text-[var(--muted)]">
                  {stat.detail}
                </span>
              </div>
            ))}
          </div>
        </header>

        <section
          className="overflow-hidden rounded-3xl border border-[var(--line)] bg-[var(--panel)] shadow-[var(--shadow)] fade-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="flex flex-col gap-4 border-b border-[var(--line)] px-4 py-5 md:px-6">
            <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl bg-red-600 px-4 py-2 text-xs text-white shadow-sm">
              <div className="flex flex-wrap items-center gap-2">
                <AlertIcon className="h-4 w-4" />
                <span className="font-semibold">Payment failed.</span>
                <span>
                  450,000 credits will permanently expire in 30 days.
                </span>
              </div>
              <button
                type="button"
                className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-red-600"
              >
                Pay Now
              </button>
            </div>

            <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
              <div className="flex flex-wrap items-center gap-2">
                {toolbarItems.map((item) => (
                  <ToolbarButton
                    key={item.label}
                    icon={item.icon}
                    label={item.label}
                    dropdown={item.dropdown}
                  />
                ))}
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <ToolbarButton label="Action" dropdown />
                <ToolbarButton
                  label="Enrichment"
                  dropdown
                  tone="accent"
                  icon={SparkIcon}
                />
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[var(--accent)] text-xs font-semibold text-white">
                  BK
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.label}
                  type="button"
                  className={`rounded-full px-3 py-1 text-xs font-semibold transition ${
                    filter.active
                      ? "bg-[var(--accent-soft)] text-[var(--accent-strong)]"
                      : "border border-[var(--line)] text-[var(--muted)] hover:border-[var(--accent-strong)] hover:text-[var(--accent-strong)]"
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <table className="w-full table-fixed border-collapse text-left text-sm">
              <colgroup>
                <col style={{ width: "3%" }} />
                <col style={{ width: "4%" }} />
                <col style={{ width: "18%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "12%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "14%" }} />
                <col style={{ width: "17%" }} />
                <col style={{ width: "4%" }} />
              </colgroup>
              <thead className="sticky top-0 z-10 bg-[var(--panel)]/95 backdrop-blur">
                <tr className="border-b border-[var(--line)]">
                  <th className="px-4 py-3">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded border-[var(--line)] text-[var(--accent-strong)]"
                      aria-label="Select all"
                    />
                  </th>
                  <th className="px-4 py-3 text-xs font-semibold text-[var(--muted)]">
                    #
                  </th>
                  <th className="px-4 py-3">
                    <HeaderCell icon={UserIcon} label="Imported Data" />
                  </th>
                  <th className="px-4 py-3">
                    <HeaderCell icon={ClockIcon} label="Last Updated At" />
                  </th>
                  <th className="px-4 py-3">
                    <HeaderCell icon={BuildingIcon} label="Company Name" />
                  </th>
                  <th className="px-4 py-3">
                    <HeaderCell icon={GlobeIcon} label="Company Website" />
                  </th>
                  <th className="px-4 py-3">
                    <HeaderCell icon={LinkedInIcon} label="LinkedIn Job URL" />
                  </th>
                  <th className="px-4 py-3">
                    <HeaderCell icon={MailIcon} label="Email Waterfall" />
                  </th>
                  <th className="px-4 py-3 text-right">
                    <ChevronRightIcon className="ml-auto h-4 w-4 text-[var(--muted)]" />
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--line)]">
                {rows.map((row, index) => (
                  <tr
                    key={row.id}
                    className="group text-sm text-slate-700 transition hover:bg-slate-50 fade-up"
                    style={{ animationDelay: `${index * 0.03 + 0.15}s` }}
                  >
                    <td className="px-4 py-4">
                      <input
                        type="checkbox"
                        className="h-4 w-4 rounded border-[var(--line)] text-[var(--accent-strong)]"
                        aria-label={`Select row ${row.id}`}
                      />
                    </td>
                    <td className="px-4 py-4 text-xs font-semibold text-slate-400">
                      {row.id}
                    </td>
                    <td className="px-4 py-4">
                      <ImportedDataCell name={row.name} />
                    </td>
                    <td className="px-4 py-4 text-sm text-slate-700">
                      <span className="font-medium">
                        {row.updatedAt} at {row.updatedTime}
                      </span>
                    </td>
                    <td className="px-4 py-4">
                      <CompanyBadge name={row.company} />
                    </td>
                    <td className="px-4 py-4">
                      <LinkCell href={row.website} />
                    </td>
                    <td className="px-4 py-4">
                      <LinkCell href={row.linkedin} label="linkedin.com/jobs" />
                    </td>
                    <td className="px-4 py-4">
                      <StatusCell
                        status={row.status}
                        note={row.note}
                        confidence={row.confidence}
                        variant="table"
                      />
                    </td>
                    <td className="px-4 py-4 text-right">
                      <RowActionButton />
                    </td>
                  </tr>
                ))}

                {Array.from({ length: skeletonCount }).map((_, index) => (
                  <tr
                    key={`skeleton-${index}`}
                    className="text-sm text-[var(--muted)]"
                  >
                    <td className="px-4 py-4">
                      <div className="h-4 w-4 rounded border border-[var(--line)]" />
                    </td>
                    <td className="px-4 py-4 font-mono text-xs text-[var(--muted)]">
                      {rows.length + index + 1}
                    </td>
                    <td className="px-4 py-4">
                      <div className="flex items-center gap-3">
                        <div className="h-9 w-9 rounded-full bg-slate-100" />
                        <div className="space-y-2">
                          <div className="h-3 w-28 rounded-full bg-slate-100" />
                          <div className="h-2 w-20 rounded-full bg-slate-100" />
                        </div>
                      </div>
                    </td>
                    <td className="px-4 py-4">
                      <div className="h-3 w-28 rounded-full bg-slate-100" />
                    </td>
                    <td className="px-4 py-4">
                      <div className="h-3 w-20 rounded-full bg-slate-100" />
                    </td>
                    <td className="px-4 py-4">
                      <div className="h-3 w-32 rounded-full bg-slate-100" />
                    </td>
                    <td className="px-4 py-4">
                      <div className="h-3 w-28 rounded-full bg-slate-100" />
                    </td>
                    <td className="px-4 py-4">
                      <div className="h-4 w-24 rounded-full bg-slate-100" />
                    </td>
                    <td className="px-4 py-4 text-right">
                      <div className="h-6 w-6 rounded-full bg-slate-100" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="divide-y divide-[var(--line)] md:hidden">
            {rows.map((row, index) => (
              <div
                key={`${row.id}-card`}
                className="flex flex-col gap-4 px-4 py-5 fade-up"
                style={{ animationDelay: `${index * 0.04 + 0.15}s` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <UserBadge
                    name={row.name}
                    title={row.title}
                    source={row.source}
                    compact
                  />
                  <StatusCell
                    status={row.status}
                    note={row.note}
                    confidence={row.confidence}
                    compact
                  />
                </div>
                <div className="grid gap-3 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-[var(--muted)]">
                      Last updated
                    </span>
                    <span className="font-semibold">
                      {row.updatedAt} {row.updatedTime}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-[var(--muted)]">
                      Company
                    </span>
                    <CompanyBadge name={row.company} compact />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-[var(--muted)]">
                      Website
                    </span>
                    <a
                      href={row.website}
                      className="text-sm font-semibold text-[var(--accent-strong)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {formatUrl(row.website)}
                    </a>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs uppercase text-[var(--muted)]">
                      LinkedIn
                    </span>
                    <a
                      href={row.linkedin}
                      className="text-sm font-semibold text-[var(--accent-strong)]"
                      target="_blank"
                      rel="noreferrer"
                    >
                      linkedin.com/jobs
                    </a>
                  </div>
                </div>
                <div className="flex items-center justify-between gap-3">
                  <button
                    type="button"
                    className="flex-1 rounded-full border border-[var(--line)] px-4 py-2 text-sm font-semibold text-[var(--muted)]"
                  >
                    Open record
                  </button>
                  <button
                    type="button"
                    className="flex-1 rounded-full bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white"
                  >
                    Copy email
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
}

function PlusIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M10 4v12M4 10h12"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ChevronDownIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M5 8l5 5 5-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ChevronRightIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M8 5l5 5-5 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AlertIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle
        cx="12"
        cy="12"
        r="9"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 7v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="12" cy="17" r="1" fill="currentColor" />
    </svg>
  );
}

function CheckIcon({ className }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path
        d="M5 10l3 3 7-7"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DatabaseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <ellipse
        cx="12"
        cy="6"
        rx="7"
        ry="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function RowsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 6h16M4 12h16M4 18h10"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ColumnsIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M7 4v16M12 4v16M17 4v16"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="4"
        y="4"
        width="16"
        height="16"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function SortIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M8 6v12M8 18l-3-3M8 18l3-3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M14 6h6M14 12h4M14 18h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function FilterIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M4 6h16l-6 7v5l-4 2v-7L4 6z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function SparkIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M12 3l1.7 4.3L18 9l-4.3 1.7L12 15l-1.7-4.3L6 9l4.3-1.7L12 3z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 16l.9 2.1L8 19l-2.1.9L5 22l-.9-2.1L2 19l2.1-.9L5 16z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function RefreshIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M20 12a8 8 0 0 1-14.3 4.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M4 12a8 8 0 0 1 14.3-4.9"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M8 5h5V0"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M16 19h-5v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function UserIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle
        cx="12"
        cy="8"
        r="3.5"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M5 19c1.7-3 4.2-4.5 7-4.5s5.3 1.5 7 4.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ClockIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 8v4l2.5 1.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BuildingIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="4"
        y="5"
        width="10"
        height="15"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <rect
        x="14"
        y="9"
        width="6"
        height="11"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 9h2M8 13h2M8 17h2"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function GlobeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <circle
        cx="12"
        cy="12"
        r="8"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M4 12h16" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M12 4c2.5 3 2.5 13 0 16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M12 4c-2.5 3-2.5 13 0 16"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function LinkedInIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="3"
        width="18"
        height="18"
        rx="4"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M8 11v6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <circle cx="8" cy="8" r="1" fill="currentColor" />
      <path
        d="M12 17v-3a2 2 0 0 1 4 0v3"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="3"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path
        d="M3 8l9 6 9-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ExternalIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className}>
      <path
        d="M14 5h5v5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M10 14L19 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <rect
        x="5"
        y="9"
        width="10"
        height="10"
        rx="2"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}
