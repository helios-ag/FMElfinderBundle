<?php

namespace FM\ElfinderBundle\Entity;

use Doctrine\ORM\Mapping as ORM;

/**
 * ElFinderFile
 * Entity type for MySQLVolumeDriver
 * @ORM\Table(name="elfinder_file",
 * uniqueConstraints={@ORM\UniqueConstraint(name="parent_name", columns={"parent_id", "name"})},
 * indexes={@ORM\Index(name="parent_id", columns={"parent_id"})})
 * @ORM\Entity
 */
class ElFinderFile
{
    /**
     * @var integer
     *
     * @ORM\Column(name="parent_id", type="integer", nullable=false)
     */
    protected $parentId;

    /**
     * @var string
     *
     * @ORM\Column(name="name", type="string", length=255, nullable=false)
     */
    protected $name;

    /**
     * @var string
     *
     * @ORM\Column(name="content", type="blob", nullable=false)
     */
    protected $content;

    /**
     * @var integer
     *
     * @ORM\Column(name="size", type="integer", nullable=false)
     */
    protected $size;

    /**
     * @var integer
     *
     * @ORM\Column(name="mtime", type="integer", nullable=false)
     */
    protected $mtime;

    /**
     * @var string
     *
     * @ORM\Column(name="mime", type="string", length=255, nullable=false)
     */
    protected $mime;

    /**
     * @var string
     *
     * @ORM\Column(name="`read`", type="string", nullable=false)
     */
    protected $read;

    /**
     * @var string
     *
     * @ORM\Column(name="`write`", type="string", nullable=false)
     */
    protected $write;

    /**
     * @var string
     *
     * @ORM\Column(name="locked", type="string", nullable=false)
     */
    protected $locked;

    /**
     * @var string
     *
     * @ORM\Column(name="hidden", type="string", nullable=false)
     */
    protected $hidden;

    /**
     * @var integer
     *
     * @ORM\Column(name="width", type="integer", nullable=false)
     */
    protected $width;

    /**
     * @var integer
     *
     * @ORM\Column(name="height", type="integer", nullable=false)
     */
    protected $height;

    /**
     * @var integer
     *
     * @ORM\Column(name="id", type="integer")
     * @ORM\Id
     * @ORM\GeneratedValue(strategy="IDENTITY")
     */
    protected $id;

    /**
     * @param string $content
     */
    public function setContent($content)
    {
        $this->content = $content;
    }

    /**
     * @return string
     */
    public function getContent()
    {
        return $this->content;
    }

    /**
     * @param int $height
     */
    public function setHeight($height)
    {
        $this->height = $height;
    }

    /**
     * @return int
     */
    public function getHeight()
    {
        return $this->height;
    }

    /**
     * @param string $hidden
     */
    public function setHidden($hidden)
    {
        $this->hidden = $hidden;
    }

    /**
     * @return string
     */
    public function getHidden()
    {
        return $this->hidden;
    }

    /**
     * @param int $id
     */
    public function setId($id)
    {
        $this->id = $id;
    }

    /**
     * @return int
     */
    public function getId()
    {
        return $this->id;
    }

    /**
     * @param string $locked
     */
    public function setLocked($locked)
    {
        $this->locked = $locked;
    }

    /**
     * @return string
     */
    public function getLocked()
    {
        return $this->locked;
    }

    /**
     * @param string $mime
     */
    public function setMime($mime)
    {
        $this->mime = $mime;
    }

    /**
     * @return string
     */
    public function getMime()
    {
        return $this->mime;
    }

    /**
     * @param int $mtime
     */
    public function setMtime($mtime)
    {
        $this->mtime = $mtime;
    }

    /**
     * @return int
     */
    public function getMtime()
    {
        return $this->mtime;
    }

    /**
     * @param string $name
     */
    public function setName($name)
    {
        $this->name = $name;
    }

    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }

    /**
     * @param int $parentId
     */
    public function setParentId($parentId)
    {
        $this->parentId = $parentId;
    }

    /**
     * @return int
     */
    public function getParentId()
    {
        return $this->parentId;
    }

    /**
     * @param string $read
     */
    public function setRead($read)
    {
        $this->read = $read;
    }

    /**
     * @return string
     */
    public function getRead()
    {
        return $this->read;
    }

    /**
     * @param int $size
     */
    public function setSize($size)
    {
        $this->size = $size;
    }

    /**
     * @return int
     */
    public function getSize()
    {
        return $this->size;
    }

    /**
     * @param int $width
     */
    public function setWidth($width)
    {
        $this->width = $width;
    }

    /**
     * @return int
     */
    public function getWidth()
    {
        return $this->width;
    }

    /**
     * @param string $write
     */
    public function setWrite($write)
    {
        $this->write = $write;
    }

    /**
     * @return string
     */
    public function getWrite()
    {
        return $this->write;
    }

}
