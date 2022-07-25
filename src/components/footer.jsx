import React from 'react';
import { Footer } from 'flowbite-react';
import {
  BsFacebook, BsInstagram, BsTwitter, BsGithub, BsDribbble,
}
  from 'react-icons/bs';

export default function footer() {
  return (
    <Footer bgDark={true}> {/* eslint-disable-line */ }
      <div className="w-full">
        <div className="grid w-full grid-cols-4 gap-8 py-8 px-6 md:grid-cols-4 xs:grid-cols-3">
          <div>
            <Footer.Title title="Company" />
            <Footer.LinkGroup col={true}> {/* eslint-disable-line */ }
              <Footer.Link href="#">
                About
              </Footer.Link>
              <Footer.Link href="#">
                Careers
              </Footer.Link>
              <Footer.Link href="#">
                Brand Center
              </Footer.Link>
              <Footer.Link href="#">
                Blog
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div className="xs:hidden">
            <Footer.Title title="help center" />
            <Footer.LinkGroup col={true}> {/* eslint-disable-line */ }
              <Footer.Link href="#">
                Discord Server
              </Footer.Link>
              <Footer.Link href="#">
                Twitter
              </Footer.Link>
              <Footer.Link href="#">
                Facebook
              </Footer.Link>
              <Footer.Link href="#">
                Contact Us
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col={true}> {/* eslint-disable-line */ }
              <Footer.Link href="#">
                Privacy Policy
              </Footer.Link>
              <Footer.Link href="#">
                Licensing
              </Footer.Link>
              <Footer.Link href="#">
                Terms & Conditions
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="download" />
            <Footer.LinkGroup col={true}> {/* eslint-disable-line */ }
              <Footer.Link href="#">
                iOS
              </Footer.Link>
              <Footer.Link href="#">
                Android
              </Footer.Link>
              <Footer.Link href="#">
                Windows
              </Footer.Link>
              <Footer.Link href="#">
                MacOS
              </Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="flex content-center justify-between w-full bg-gray-700 py-6 px-4 sm:flex sm:items-center sm:justify-between">
          <div>
            <Footer.Copyright
              href="#"
              by=" Medstore.et™"
              year={2022}
            />
          </div>
          <div className="mt-4 self-center flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon
              href="#"
              icon={BsFacebook}
            />
            <Footer.Icon
              href="#"
              icon={BsInstagram}
            />
            <Footer.Icon
              href="#"
              icon={BsTwitter}
            />
            <Footer.Icon
              href="#"
              icon={BsGithub}
            />
            <Footer.Icon
              href="#"
              icon={BsDribbble}
            />
          </div>
        </div>
      </div>
    </Footer>
  );
}
