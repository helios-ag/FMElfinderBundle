<?php

namespace FM\ElfinderBundle\Form\Type;

use FM\ElfinderBundle\Form\DataTransformer\JsonStringArrayTransformer;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Form\FormView;
use Symfony\Component\OptionsResolver\Options;
use Symfony\Component\OptionsResolver\OptionsResolver;

class ElFinderType extends AbstractType
{
    public function __construct(private readonly array $configuration = [])
    {
    }

    /**
     * {@inheritdoc}
     */
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder->setAttribute('enable', $options['enable']);

        if ($builder->getAttribute('enable')) {
            $builder->setAttribute('instance', $options['instance']);
        }
        $builder->setAttribute('homeFolder', $options['homeFolder']);
        $builder->setAttribute('multiple', $options['multiple']);

        if ($options['multiple'] === true) {
            $builder->addModelTransformer(new JsonStringArrayTransformer());
        }
    }

    /**
     * {@inheritdoc}
     */
    public function buildView(FormView $view, FormInterface $form, array $options): void
    {
        $view->vars['enable']   = $options['enable'];
        $view->vars['multiple'] = $options['multiple'];

        if ($options['enable']) {
            $view->vars['instance']   = $options['instance'];
            $view->vars['homeFolder'] = $options['homeFolder'];
        }
    }

    /**
     * {@inheritdoc}
     */
    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver
            ->setDefaults([
                'enable'     => true,
                'instance'   => 'default',
                'homeFolder' => '',
                'multiple'   => null,
            ])
            ->setAllowedTypes('enable', 'bool')
            ->setAllowedTypes('instance', ['string', 'null'])
            ->setAllowedTypes('homeFolder', ['string', 'null'])
            ->setAllowedTypes('multiple', ['bool', 'null'])
            ->setNormalizer('multiple', function (Options $options, ?bool $multiple): bool {
                if (null !== $multiple) {
                    return $multiple;
                }

                $instance = $options['instance'];

                return null !== $instance &&
                    ($this->configuration['instances'][$instance]['multiple'] ?? false) === true;
            });
    }

    /**
     * {@inheritdoc}
     */
    public function getParent(): ?string
    {
        if (method_exists('Symfony\Component\Form\AbstractType', 'getBlockPrefix')) {
            return 'Symfony\Component\Form\Extension\Core\Type\TextType';
        }

        return 'text';
    }

    /**
     * {@inheritdoc}
     */
    public function getName(): string
    {
        return $this->getBlockPrefix();
    }

    /**
     * {@inheritdoc}
     */
    public function getBlockPrefix(): string
    {
        return 'elfinder';
    }
}
