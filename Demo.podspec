
  Pod::Spec.new do |s|
    s.name = 'Demo'
    s.version = '0.0.1'
    s.summary = 'An example of a custom Capacitor plugin'
    s.license = 'MIT'
    s.homepage = 'https://github.com/louisdebaere/capacitor-demo-plugin'
    s.author = 'Louis Debaere'
    s.source = { :git => 'https://github.com/louisdebaere/capacitor-demo-plugin', :tag => s.version.to_s }
    s.source_files = 'ios/Plugin/**/*.{swift,h,m,c,cc,mm,cpp}'
    s.ios.deployment_target  = '11.0'
    s.dependency 'Capacitor'
  end