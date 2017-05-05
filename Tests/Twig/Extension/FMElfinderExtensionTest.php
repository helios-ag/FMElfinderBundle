<?php

namespace FM\ElfinderBundle\Tests\Twig\Extension;

use FM\ElfinderBundle\Twig\Extension\FMElfinderExtension;
use Symfony\Bridge\Twig\Extension\RoutingExtension;
use Symfony\Component\Config\FileLocator;
use Symfony\Component\Routing\Generator\UrlGenerator;
use Symfony\Component\Routing\Loader\YamlFileLoader;
use Symfony\Component\Routing\RequestContext;
use Symfony\Component\Routing\RouteCollection;

class FMElfinderExtensionTest extends \PHPUnit\Framework\TestCase
{
    /** @var \Symfony\Component\DependencyInjection\ContainerInterface|\PHPUnit_Framework_MockObject_MockObject */
    protected $containerMock;

    /** @var \Symfony\Component\Routing\RouterInterface|\PHPUnit_Framework_MockObject_MockObject */
    protected $routerMock;

    /** @var \FM\ElfinderBundle\Twig\Extension\FMElFinderExtension */
    protected $extension;

    /** @var \Twig_Environment */
    protected $twig;

    /** @var \Twig_Template */
    protected $template;

    protected function setUp()
    {
        $this->twig      = new \Twig_Environment(new \Twig_Loader_Filesystem(array(__DIR__.'/../../../Resources/views/Elfinder/helper')));
        $this->extension = new FMElfinderExtension($this->twig);
        $this->twig->addExtension($this->extension);
        $loader     = new YamlFileLoader(new FileLocator(__DIR__.'/../../../Resources/config'));
        $routes     = new RouteCollection();
        $collection = $loader->load('routing.yml');
        $routes->addCollection($collection);
        $this->twig->addExtension(new RoutingExtension(new UrlGenerator($routes, new RequestContext())));
    }

    public function testRenderTinyMCE3()
    {
        $this->template = $this->twig->loadTemplate('_tinymce.html.twig');
        $testData       = $this->renderTemplate(array('instance' => 'minimal'));

        $expected = <<<'EOF'
<script type="text/javascript">
    //<![CDATA[
    function elFinderBrowser (field_name, url, type, win) {
        tinyMCE.activeEditor.windowManager.open({
            file: "http://localhost/elfinder/minimal",
            title: "",
            width:,
            height:,
            resizable: 'yes',
            inline: 'yes',    // This parameter only has an effect if you use the inlinepopups plugin!
            popup_css: false, // Disable TinyMCE's default popup CSS
            close_previous: 'no'
        }, {
            window: win,
            input: field_name
        });
        return false;
    }
    //]]>
</script>
EOF;

        $this->assertSame($this->normalizeOutput($expected), $this->normalizeOutput($testData));
    }

    public function testRenderTinyMCE4()
    {
        $this->template = $this->twig->loadTemplate('_tinymce4.html.twig');
        $testData       = $this->renderTemplate(array('instance' => 'minimal'));

        $expected = <<<'EOF'
<script type="text/javascript">
    function elFinderBrowser (field_name, url, type, win) {
        tinymce.activeEditor.windowManager.open({
            file:"http://localhost/elfinder/minimal",
            title:"",
            width:,
            height:,
            resizable: 'yes'
        }, {
            setUrl: function (url) {
                win.document.getElementById(field_name).value = url;
            }
        });
        return false;
    }
</script>
EOF;

        $this->assertSame($this->normalizeOutput($expected), $this->normalizeOutput($testData));
    }

    public function testRenderSummernote()
    {
        $this->template = $this->twig->loadTemplate('_summernote.html.twig');
        $testData       = $this->renderTemplate(array('instance' => 'minimal'));

        $expected  = <<<'EOF'
<script type="text/javascript">
    function elFinderBrowser(){
            window.open(
                "http://localhost/elfinder/minimal",
                "",
                "width=, height=, resizable=yes, scrollbars=no, status=no, toolbar=no"
            );
            return false;
        }
</script>
EOF;
    }

    public function testName()
    {
        $this->assertEquals('fm_elfinder_init', $this->extension->getName());
    }

    /**
     * {@inheritdoc}
     */
    protected function tearDown()
    {
        unset($this->template);
        unset($this->twig);
    }

    /**
     * {@inheritdoc}
     */
    protected function renderTemplate(array $context = array())
    {
        return $this->template->render($context);
    }

    /**
     * Normalizes the output by removing the heading whitespaces.
     *
     * @param string $output the output
     *
     * @return string the normalized output
     */
    protected function normalizeOutput($output)
    {
        return preg_replace("/\r|\n/", '', str_replace(PHP_EOL, '', str_replace(' ', '', $output)));
    }

    public function testSubClassOfTwigExtension()
    {
        $rc = new \ReflectionClass('FM\ElfinderBundle\Twig\Extension\FMElfinderExtension');

        $this->assertTrue($rc->isSubclassOf('Twig_Extension'));
    }

    /**
     * @expectedException \Twig_Error_Runtime
     * @expectedExceptionMessage The function can be applied to strings only.
     */
    public function testSummernoteInstanceNotString()
    {
        $this->extension->summernote(array());
    }

    /**
     * @expectedException \Twig_Error_Runtime
     * @expectedExceptionMessage The function can be applied to strings only.
     */
    public function testTinyMCEInstanceNotString()
    {
        $this->extension->tinymce(array());
    }

    /**
     * @expectedException \Twig_Error_Runtime
     * @expectedExceptionMessage The function can be applied to strings only.
     */
    public function testTinyMCE4InstanceNotString()
    {
        $this->extension->tinymce4(array());
    }

    public function testGetFunctions()
    {
        $twigFunctions = $this->extension->getFunctions();

        foreach ($twigFunctions as $twigFunction) {
            $this->assertInstanceOf('Twig_SimpleFunction', $twigFunction);
        }
    }
}
