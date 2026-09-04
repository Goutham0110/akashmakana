// Privacy-friendly page-view analytics via GoatCounter (no cookies, GDPR-safe).
// To enable:
//   1. Sign up at https://www.goatcounter.com and pick a site code (subdomain).
//   2. Add the production domain as an allowed domain in GoatCounter settings.
//   3. Set GOATCOUNTER_CODE below and redeploy.
// While empty, this component renders nothing, so it is safe to ship disabled.
const GOATCOUNTER_CODE = "";

export default function Analytics() {
  if (!GOATCOUNTER_CODE) return null;
  return (
    <script
      async
      data-goatcounter={`https://${GOATCOUNTER_CODE}.goatcounter.com/count`}
      src="https://gc.zgo.at/count.js"
    />
  );
}
