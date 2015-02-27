<?php

namespace FM\ElfinderBundle\Form\Type;

use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormView;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolverInterface;

/**
 * Class ElFinderType
 * @package FM\ElfinderBundle\Form\Type
 */
class ElFinderType extends AbstractType
{

    /**
     * @inheritdoc
     */
    public function buildForm(FormBuilderInterface $builder, array $options)
    {
        $builder->setAttribute('enable', $options['enable']);

        if($builder->getAttribute('enable'))
            $builder->setAttribute('instance', $options['instance']);
            $builder->setAttribute('homeFolder', $options['homeFolder']);
    }

    /**
     * @inheritdoc
     */
    public function buildView(FormView $view, FormInterface $form, array $options)
    {
        $view->vars['enable'] = $form->getConfig()->getAttribute('enable');

        if($form->getConfig()->getAttribute('enable')) {
            $view->vars['instance'] = $form->getConfig()->getAttribute('instance');
            $view->vars['homeFolder'] = $form->getConfig()->getAttribute('homeFolder');
        }
    }

    /**
     * @inheritdoc
     */
    public function setDefaultOptions(OptionsResolverInterface $resolver)
    {
        $resolver
            ->setDefaults(array(
                'enable'        => true,
                'instance'      => '',
                'homeFolder'    => '',
            ))
            ->addAllowedTypes(array(
                'enable'        => 'bool',
                'instance'      => array('string', 'null'),
                'homeFolder'    => array('string', 'null'),
            ));
    }
    /**
     * @inheritdoc
     */
    public function getParent()
    {
        return 'text';
    }
    /**
     * @inheritdoc
     */
    public function getName()
    {
        return 'elfinder';
    }
}