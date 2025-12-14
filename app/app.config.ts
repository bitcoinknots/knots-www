// Usage:
//    <script>: const appConfig = useAppConfig()
//    <template>: {{ appConfig.key }}

export default defineAppConfig({
  title: 'Bitcoin Knots',
  vweb: '0.1.1',
  vapp: '29.2',
  url: {
    // internal
    contrast:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110.desc.html',
    fingerprint: 'https://bitcoinknots.org/files/29.x/29.2.knots20251110/SHA256SUMS',
    signature: 'https://bitcoinknots.org/files/29.x/29.2.knots20251110/SHA256SUMS.asc',
    ubuntu: 'https://launchpad.net/~luke-jr/+archive/ubuntu/bitcoinknots',
    group: 'https://groups.google.com/g/bitcoin-knots-announce',
    group_mailto: 'mailto:bitcoin-knots-announce+subscribe@googlegroups.com',
    gh_repo: 'https://github.com/bitcoinknots/bitcoin',
    gh_notes: 'https://github.com/bitcoinknots/bitcoin/releases',
    // social
    discord: 'https://discord.gg/3Ccegp9YrU',
    github: 'https://github.com/bitcoinknots',
    telegram: 'https://t.me/Bitcoin_Knots',
    x: 'https://x.com/BitcoinKnots',
    xtag: 'https://x.com/intent/post?text=This%20is&hashtags=AskKnots&via=BitcoinKnots',
  },
  files: {
    x86: 'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-x86_64-linux-gnu.tar.gz',
    aarch64:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-aarch64-linux-gnu.tar.gz',
    ppc64_be:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-powerpc64-linux-gnu.tar.gz ',
    ppc64_le:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-powerpc64le-linux-gnu.tar.gz ',
    riscv64:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-riscv64-linux-gnu.tar.gz ',
    arm: 'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-arm-linux-gnueabihf.tar.gz',
    ubuntu:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110.tar.gz',
    intel_app:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-x86_64-apple-darwin.zip', // Intel Mac App
    intel:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-x86_64-apple-darwin.tar.gz', // Intel Mac Terminal
    apple_app:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-x86_64-apple-darwin-unsigned.zip', // Apple Silicon App
    apple:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-x86_64-apple-darwin-unsigned.tar.gz', // Apple Silicon Terminal
    windows_exe:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-win64-setup-pgpverifiable.exe', // Windows Install (exe)
    windows:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110-win64-debug.zip', // Windows Portable (zip)
    source:
      'https://bitcoinknots.org/files/29.x/29.2.knots20251110/bitcoin-29.2.knots20251110.tar.gz ',
  },
})
